import { Card, CardContent, Grid } from "@mui/material";
import HeatMap from "react-heatmap-grid";
import { loadHeatMapData } from "../../utils/loadData";
import { weekdays, months } from "../../const/times";
import UseWindowDimensions from "../../utils/dimension";

export default function OurHeatMap({ usState }) {
    const data = loadHeatMapData(usState);
    const { height, width } = UseWindowDimensions();

    const xLabels = months;
    const yLabels = weekdays;
    const newData = new Array(yLabels.length)
        .fill(0)
        .map(() =>
            new Array(xLabels.length).fill(0));
    var reviewTotal = 0
    data.forEach((review) => {
        const d = new Date(review["date"]);
        ++newData[d.getDay()][d.getMonth()];
        ++reviewTotal;
    });

    newData.map((element) => {
        element = Math.floor(element / reviewTotal * 100)
    })

    return (
        <Card variant="outlined">
            <CardContent>
                <Grid container direction="column">
                    <Grid item align={"left"} >
                        <h2>Reviews HeatMap (Weekdays vs Months)</h2>
                    </ Grid>
                    <Grid item height={250} width={width * 0.4}>
                        <div style={{ fontSize: "13px" }}>
                            <HeatMap xLabels={xLabels} yLabels={yLabels} data={newData} />
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}