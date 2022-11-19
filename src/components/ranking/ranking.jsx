import {
    Card, CardContent, Grid, Typography
} from "@mui/material";
import BarChart from 'react-bar-chart';
import { loadRankingData } from "../../utils/loadData";

export default function Ranking(usState) {
    const data = loadRankingData(usState);
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    function handleBarClick(element, id) {
        console.log(`The bin ${element.text} with id ${id} was clicked`);
    }

    return (
        <Card variant="outlined">
            <CardContent>
                {/* TODO */}
                {/* remarks: 1. width change to adaptive 2. data procecing 3. handle on hover*/}
                <BarChart
                    xlabel="Restaurant Name"
                    ylabel="Stars"
                    width={700}
                    height={500}
                    margin={margin}
                    data={data}
                    onBarClick={handleBarClick}
                />
            </CardContent>
        </ Card>
    )
}