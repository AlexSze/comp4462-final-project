import { Card, CardContent, Grid } from "@mui/material";
import { ResponsiveParallelCoordinates } from "@nivo/parallel-coordinates";
import { loadParallelCoordinateData } from "../../utils/loadData";
import UseWindowDimensions from '../../utils/dimension';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';
import { useState, useEffect } from "react";

export default function ParallelCoordinate({ usState }) {

  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(null);
  const [rawData, setRawData] = useState(null);
  const { height, width } = UseWindowDimensions();

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const temp = await loadParallelCoordinateData(
        true,
        usState,
        "categories",
        "opening_hours", // "Bars, Restaurants, Sports Bars, Nightlife"
        "stars", // "5"
        "Ambience"  /*{u'divey': None, u'hipster': None, u'casual': True, u'touristy': None, u'trendy': None, u'intimate': False,
                         u'romantic': None, u'classy': False, u'upscale': None}*/
      );
      return temp
    }

    fetchData().then(data => {
      var temp = [];
      for (let i = 0; i < data.length; i++) {
        if (!temp.includes(data[i]["categories"]))
          temp.push(data[i]["categories"]);
      }

      setRawData(data)
      setCategories(temp)
      setLoading(false)
    }).catch(error => {
      // handle/report error
    });
  }, [usState]);

  return (
    <Card variant="outlined">
      <CardContent>
        <h2>Parallel Coordinates</h2>
        <Grid container direction="row">
          {loading ?
            <Grid item align={"center"} width={width * 0.5} height={height * 0.89}>
              <ReactSpinner />
            </Grid> : <Grid item width={width * 0.5} height={height * 0.89}>
              <ResponsiveParallelCoordinates
                data={rawData}
                variables={[
                  {
                    key: "categories",
                    type: "point",
                    values: categories,
                    padding: 0.3,
                    ticksPosition: "before",
                    // legend: "Categories",
                    legendPosition: "start",
                    legendOffset: 40,
                  },
                  {
                    key: "opening_hours",
                    type: "linear",
                    min: 0,
                    max: 200,
                    // legend: "Opening Hours",
                    legendPosition: "start",
                    legendOffset: 40,
                  },
                  {
                    key: "stars",
                    type: "linear",
                    min: 0,
                    max: 5,
                    // legend: "Overall Reviews",
                    legendPosition: "start",
                    legendOffset: -20,
                  },
                  {
                    key: "ambience",
                    type: "point",
                    value: ["divey", "hipster", "casual", "touristy", "trendy", "intimate", "romantic", "classy", "upscale"],
                    ticksPosition: "after",
                    // legend: "Ambience",
                    legendPosition: "start",
                    legendOffset: -20,
                  },
                ]}
                layout={"horizontal"}
                margin={{ top: 20, right: 60, bottom: 60, left: 60 }}
                lineOpacity={40 / rawData.length}
                theme={{
                  axis: {
                    domain: {
                      line: {
                        stroke: "#777777",
                        strokeWidth: 2,
                      },
                    },
                  },
                }}
              />
              <h4 style={{ left: "2%", top: "170%", position: "absolute", transform: [{ rotate: "-180deg" }] }}>Categories</h4>
              <h4 style={{ left: "16%", top: "170%", position: "absolute", transform: [{ rotate: "-180deg" }] }}>Opening Hours </h4>
              <h4 style={{ left: "17.5%", top: "172%", position: "absolute", transform: [{ rotate: "-180deg" }] }}>(weekly) </h4>
              <h4 style={{ left: "29%", top: "170%", position: "absolute", transform: [{ rotate: "-180deg" }] }}>Overall Reviews</h4>
              <h4 style={{ left: "44%", top: "170%", position: "absolute", transform: [{ rotate: "-180deg" }] }}>Ambience</h4>
            </Grid>}
          <Grid item></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}