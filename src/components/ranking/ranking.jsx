import {
    Card, CardContent, Grid, Typography
} from "@mui/material";
import UseWindowDimensions from "../../utils/dimension";
import { loadRankingData } from "../../utils/loadData";
import {React, useRef, useEffect} from "react";
import { Bar } from "react-chartjs-2";

import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
  } from 'chart.js';
  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
  );
  
export default function Ranking({ usState }) {
    const data = loadRankingData(usState);
    const { height, width } = UseWindowDimensions();

    const labels = [];
    const values = [];
    for(let i = 0; i < data.length; i++){
        labels.push(data[i]["text"]);
        values.push(data[i]["value"]);
    }
    console.log(values);
  return (
    <div>
      <div style={{ maxWidth: width*0.49 }}>
      <Card variant="outlined">
        <CardContent>
            <h1>Overall Review of Restaurants</h1>
            <h4 style={{ left: "1%", top: "188%", position: "absolute"}}>No.of restuarants</h4>
            <h4 style={{ left: "26%", top: "259%", position: "absolute"}}>Stars</h4>
            <Grid item width={width * 0.49} height={height * 0.7}>
                <Bar
                data={{
                    labels: labels,
                    datasets: [
                    {
                        label: "No.of restaurants in different range of stars",
                        data: values,
                        backgroundColor: ["#E84444", "#E84444", "#E84444", "#E84444", "#E84444"],
                        borderColor: ["#E84444", "#E84444", "#E84444", "#E84444", "#E84444"],
                        borderWidth: 0.2,
                    },
                    ],
                }}
                height={height*0.7}
                options={{
                    maintainAspectRatio: false,
                    legend: {
                    labels: {
                        fontSize: 15,
                    },
                    },
                }}
                />
                {/* <h3 style={{left:"170%", top: "300%", position: "absolute", transform: [{rotate: "-180deg"}]}}>Stars</h3> */}
            </Grid>
        </CardContent>
      </Card>
    </div>
        
    </div>
  );
}
