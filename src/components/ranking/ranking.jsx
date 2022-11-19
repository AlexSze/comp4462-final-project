import {
    Card, CardContent, Grid, Typography
} from "@mui/material";
import BarChart from 'react-bar-chart';
import UseWindowDimensions from "../../utils/dimension";
import { loadRankingData } from "../../utils/loadData";

export default function Ranking(usState) {
    const data = loadRankingData(usState);
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const { height, width } = UseWindowDimensions();

    function handleBarClick(element, id) {
        console.log(`The bin ${element.text} with id ${id} was clicked`);
    }

    return (
        <Card variant="outlined">
            <CardContent>
                {/* TODO */}
                {/* remarks: 1. width change to adaptive 2. data procecing 3. handle on hover*/}
                <Grid container direction="column">
                    <Grid item align={"left"} >
                        <h2>Restaurant Ranking barChart</h2>
                    </ Grid>
                    <Grid item height={height * 0.3} marginRight={height * 0.009} marginBottom={height * 0.005} >
                        <BarChart
                            xlabel="Restaurant Name"
                            ylabel="Stars"
                            width={width * 0.3}
                            height={500}
                            margin={margin}
                            data={data}
                            onBarClick={handleBarClick}
                        />
                    </ Grid>
                </ Grid>
            </CardContent>
        </ Card >
    )
}