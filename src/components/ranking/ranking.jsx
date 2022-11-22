import {
    Card, CardContent, Grid, Typography
} from "@mui/material";
import { transformation } from "leaflet";
import BarChart from 'react-bar-chart';
import UseWindowDimensions from "../../utils/dimension";
import { loadRankingData } from "../../utils/loadData";
import {React, useRef, useEffect} from "react";
import {RestaurantName} from './restaurantName';
import { Bar } from "react-chartjs-2";


// export default function Ranking({ usState }) {
//     const data = loadRankingData(usState);
//     const margin = { top: 20, right: 20, bottom: 30, left: 60 };
//     const { height, width } = UseWindowDimensions();

//     function handleBarClick(element, id) {
//         console.log(`The bin ${element.text} with id ${id} was clicked`);
//     }
//     const name = [];
//     for(let i = 0; i < data.length; i++){
//         name.push(data[i]["text"]);
//     }
//     // console.log(name);
//     var temp = data;
//     // for(let i = 0; i < temp.length; i++){
//     //     temp[i]["text"] = i===0?" ":temp[i-1]["text"] + " ";
//     // }
//     // console.log(name);
    
//     return (
//         <Card variant="outlined">
//             <CardContent>
//                 {/* TODO */}
//                 {/* remarks: 1. width change to adaptive 2. data procecing 3. handle on hover*/}
//                 <Grid container direction="column" width={width * 0.4}>
//                     <Grid item align={"left"} >
//                         <h2>Restaurant Ranking barChart</h2>
//                     </ Grid>
//                     <Grid item height={height * 0.8} marginRight={height * 0.009} marginBottom={height * 0.005}>
//                         <h3 id="test" style={{left:"0x", position: "static"}}>Number of Restaurants</h3>
//                         <div color="#FAEBD7" backgroundcolor="red">
//                             <BarChart style={[{color:"#FAEBD7"}, {backgroundcolor: "red"}]}
//                                 // xlabel={"Restaurant Name"}
//                                 // ylabel={"Stars"}
//                                 width={width * 0.3}
//                                 height={500}
//                                 margin={margin}
//                                 data={temp}
//                                 onBarClick={handleBarClick}
//                                 backgroundcolor={"#FAEBD7"}
//                                 color={"#FAEBD7"}
//                                 strokeColor={"#FAEBD7"}
//                                 highlightFill={"#FAEBD7"}
//                                 highlightStroke={"#FAEBD7"}
//                                 fillColor={"#FAEBD7"}
//                             />
//                         </div>
//                         <h3 style={{left:"85%", top: "-9%", position: "relative", transform: [{rotate: "-180deg"}]}}>Stars</h3>
//                         {/* <RestaurantName name={name[0]} x={"-280px"} y={"260px"}/>
//                         <RestaurantName name={name[1]} x={"-228px"} y={"240px"}/>
//                         <RestaurantName name={name[2]} x={"-176px"} y={"220px"}/>
//                         <RestaurantName name={name[3]} x={"-124px"} y={"200px"}/>
//                         <RestaurantName name={name[4]} x={"-72px"} y={"180px"}/>
//                         <RestaurantName name={name[5]} x={"-20px"} y={"160px"}/>
//                         <RestaurantName name={name[6]} x={"32px"} y={"140px"}/>
//                         <RestaurantName name={name[7]} x={"84px"} y={"120px"}/>
//                         <RestaurantName name={name[8]} x={"136px"} y={"100px"}/>
//                         <RestaurantName name={name[9]} x={"188px"} y={"80px"}/> */}
                    
//                     </ Grid>
//                 </ Grid>
//             </CardContent>
//         </ Card >
//     )
// }
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
            <h1>Overall Review of Restaurants (No.of restuarants vs stars)</h1>
            <Grid item width={width * 0.49} height={height * 0.7}>
                <Bar
                data={{
                    labels: labels,
                    datasets: [
                    {
                        label: "No.of Restaurants",
                        data: values,
                        backgroundColor: ["#EA0014", "#EA0014", "#EA0014", "#EA0014", "#EA0014"],
                        borderColor: ["#EA0014", "#EA0014", "#EA0014", "#EA0014", "#EA0014"],
                        borderWidth: 0.5,
                    },
                    ],
                }}
                height={height*0.7}
                options={{
                    maintainAspectRatio: false,
                    // scales: {
                    //   yAxes: [
                    //     {
                    //       ticks: {
                    //         beginAtZero: true,
                    //       },
                    //     },
                    //   ],
                    // },
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
