import { Card, CardContent, Grid } from "@mui/material";
import { ResponsiveParallelCoordinates } from "@nivo/parallel-coordinates";
import { loadParallelCoordinateData } from "../../utils/loadData";

export default function ParallelCoordinate({usState}) {
  const rawData = loadParallelCoordinateData(
    true,
    usState,
    "categories",
    "opening_hours", // "Bars, Restaurants, Sports Bars, Nightlife"
    "stars", // "5"
    "Ambience"  /*{u'divey': None, u'hipster': None, u'casual': True, u'touristy': None, u'trendy': None, u'intimate': False,
                   u'romantic': None, u'classy': False, u'upscale': None}*/
    );
  var categories = [];
  for(let i = 0; i < rawData.length; i++){
    if(!categories.includes(rawData[i]["categories"]))
      categories.push(rawData[i]["categories"]);
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <h2>Parallel Coordinates</h2>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={12} style={{ height: 600 }}>
            <ResponsiveParallelCoordinates
              data={rawData}
              variables={[
                {
                  key: "categories",
                  type: "point",
                  values: categories,
                  padding: 0.3,
                  ticksPosition: "before",
                  legend: "Categories",
                  legendPosition: "start",
                  legendOffset: 40,
                },
                {
                  key: "opening_hours",
                  type: "linear",
                  min: 0,
                  max: 200,
                  legend: "Opening Hours",
                  legendPosition: "start",
                  legendOffset: 40,
                },
                {
                  key: "stars",
                  type: "linear",
                  min: 0,
                  max: 5,
                  legend: "Overall Reviews",
                  legendPosition: "start",
                  legendOffset: -20,
                },
                {
                  key: "ambience",
                  type: "point",
                  value: ["divey", "hipster", "casual","touristy", "trendy", "intimate", "romantic", "classy", "upscale"],
                  ticksPosition: "after",
                  legend: "Ambience",
                  legendPosition: "start",
                  legendOffset: -20,
                },
              ]}
              margin={{ top: 20, right: 70, bottom: 20, left: 70 }}
              // colors={(item) => {
              //   return getStanceColor(getPoliticalStance(item["S#"]));
              // }}
              lineOpacity={12 / rawData.length}
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
          </Grid>
          <Grid item></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}