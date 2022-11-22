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

export default function Ranking({ usState }) {
    const data = loadRankingData(usState);
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const { height, width } = UseWindowDimensions();

    function handleBarClick(element, id) {
        console.log(`The bin ${element.text} with id ${id} was clicked`);
    }
    const name = [];
    for(let i = 0; i < data.length; i++){
        name.push(data[i]["text"]);
    }
    // console.log(name);
    var temp = data;
    // for(let i = 0; i < temp.length; i++){
    //     temp[i]["text"] = i===0?" ":temp[i-1]["text"] + " ";
    // }
    // console.log(name);
    
    return (
        <Card variant="outlined">
            <CardContent>
                {/* TODO */}
                {/* remarks: 1. width change to adaptive 2. data procecing 3. handle on hover*/}
                <Grid container direction="column">
                    <Grid item align={"left"} >
                        <h2>Restaurant Ranking barChart</h2>
                    </ Grid>
                    <Grid item height={height * 0.8} marginRight={height * 0.009} marginBottom={height * 0.005}>
                        <h2 id="test" style={{left:"0x", position: "static"}}>Stars</h2>
                        <BarChart style={[{color:"#FAEBD7"}, {backgroundcolor: "red"}]}
                            // xlabel={"Restaurant Name"}
                            // ylabel={"Stars"}
                            width={width * 0.3}
                            height={500}
                            margin={margin}
                            data={temp}
                            onBarClick={handleBarClick}
                            backgroundcolor={"red"}
                        />
                        <h2 style={{left:"560px", top: "-60px", position: "relative", transform: [{rotate: "-180deg"}]}}>Restaurant Name</h2>
                        <RestaurantName name={name[0]} x={"-280px"} y={"260px"}/>
                        <RestaurantName name={name[1]} x={"-228px"} y={"240px"}/>
                        <RestaurantName name={name[2]} x={"-176px"} y={"220px"}/>
                        <RestaurantName name={name[3]} x={"-124px"} y={"200px"}/>
                        <RestaurantName name={name[4]} x={"-72px"} y={"180px"}/>
                        <RestaurantName name={name[5]} x={"-20px"} y={"160px"}/>
                        <RestaurantName name={name[6]} x={"32px"} y={"140px"}/>
                        <RestaurantName name={name[7]} x={"84px"} y={"120px"}/>
                        <RestaurantName name={name[8]} x={"136px"} y={"100px"}/>
                        <RestaurantName name={name[9]} x={"188px"} y={"80px"}/>
                        
                    </ Grid>
                </ Grid>
            </CardContent>
        </ Card >
    )
}

// export default function Ranking({usState}) {
//     const data = loadRankingData(usState);
//     const { height, width } = UseWindowDimensions();

//     var label = [];
//     var stars = [];
//     for(let i = 0; i < data.length; i++){
//         label.push(data[i]["text"]);
//         stars.push(data[i]["value"]);
//     }

//     return (
//       <div className="App">
//         <h1>GEEKSFORGEEKS BAR CHART REACTJS</h1>
//         <div style={{ maxWidth:  width}}>
//           <Bar
//             data={{
//               // Name of the variables on x-axies for each bar
//               labels: label,
//               datasets: [
//                 {
//                   // Label for bars
//                   label: "total count/value",
//                   // Data or value of your each variable
//                   data: stars,
//                   // Color of each bar
//                   backgroundColor: ["aqua", "green", "red", "yellow"],
//                   // Border color of each bar
//                   borderColor: ["aqua", "green", "red", "yellow"],
//                   borderWidth: 0.5,
//                 },
//               ],
//             }}
//             // Height of graph
//             height={height}
//             options={{
//               maintainAspectRatio: false,
//               scales: {
//                 yAxes: [
//                   {
//                     ticks: {
//                       // The y-axis value will start from zero
//                       beginAtZero: true,
//                     },
//                   },
//                 ],
//               },
//               legend: {
//                 labels: {
//                   fontSize: 15,
//                 },
//               },
//             }}
//           />
//         </div>
//       </div>
//     );
//   }

