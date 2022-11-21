import {
    Card, CardContent, Grid, Typography
} from "@mui/material";
import { transformation } from "leaflet";
import BarChart from 'react-bar-chart';
import UseWindowDimensions from "../../utils/dimension";
import { loadRankingData } from "../../utils/loadData";
import {View, Text} from "react-native";
import {useRef, useEffect} from "react";

export default function Ranking({ usState }) {
    const data = loadRankingData(usState);
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const { height, width } = UseWindowDimensions();

    function handleBarClick(element, id) {
        console.log(`The bin ${element.text} with id ${id} was clicked`);
    }
    // document.getElementById("top1").innerHTML = "KFC";
    // function restuarantName(id, name){
    //     document.getElementById(id).innerHTML = name;
    // }
    

    return (
        <Card variant="outlined">
            <CardContent>
                {/* TODO */}
                {/* remarks: 1. width change to adaptive 2. data procecing 3. handle on hover*/}
                <Grid container direction="column">
                    <Grid item align={"left"} >
                        <h2>Restaurant Ranking barChart</h2>
                    </ Grid>
                    <Grid item height={height * 0.7} marginRight={height * 0.009} marginBottom={height * 0.005}>
                        <h2 id="test" style={{left:"0x", position: "static"}}>Stars</h2>
                        <BarChart style={[{color:"#FAEBD7"}, {backgroundcolor: "red"}]}
                            // xlabel={"Restaurant Name"}
                            // ylabel={"Stars"}
                            width={width * 0.3}
                            height={500}
                            margin={margin}
                            data={data}
                            onBarClick={handleBarClick}
                        />
                        <h2 style={{left:"580px", top: "-60px", position: "relative", transform: [{rotate: "-180deg"}]}}>Restaurant Name</h2>
                        <View style={[{ transform: [{ rotate: "90deg" }]}, {left: "-280px"}, {top: "260px"}, {position: "relative"}]}> 
                            <Text id="top1"> Tucson Trap & Skeet Club</Text>
                        
                        </View>
                        
                    </ Grid>
                </ Grid>
            </CardContent>
        </ Card >
    )
}