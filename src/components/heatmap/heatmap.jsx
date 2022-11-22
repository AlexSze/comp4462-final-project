import { Card, CardContent, Grid } from "@mui/material";
import HeatMap from "react-heatmap-grid";
import { loadHeatMapData } from "../../utils/loadData";
import { weekdays, months } from "../../const/times";
import { useEffect, useState } from 'react';
import UseWindowDimensions from '../../utils/dimension';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';
import { HeatMapLegend } from "./heatMapLegend";

export default function OurHeatMap({ usState }) {
    const [loading, setLoading] = useState(true);
    const { height, width } = UseWindowDimensions();
    const xLabels = months;
    const yLabels = weekdays;
    const [newData, setNewData] = useState(null);
    var reviewTotal = 0

    useEffect(() => {
        const fetchData = async () => {
            const temp = await loadHeatMapData(usState);
            return temp
        }

        fetchData().then(data => {
            const temp = new Array(yLabels.length)
                .fill(0)
                .map(() =>
                    new Array(xLabels.length).fill(0));
            data.forEach((review) => {
                const d = new Date(review["date"]);
                ++temp[d.getDay()][d.getMonth()];
                ++reviewTotal;
            });
            temp.map((element) => {
                element = Math.floor(element / reviewTotal * 100)
            })

            setNewData(temp)
            setLoading(false)
        }).catch(error => {
            // handle/report error
        });
    }, []);

    return (
        <Card variant="outlined">
            <CardContent>
                {loading ?
                    <Grid item align={"center"} width={width * 0.4}>
                        <ReactSpinner />
                    </Grid> : <Grid container direction="column">
                        <Grid item align={"left"} >
                            <h2>Reviews HeatMap (Weekdays vs Months)</h2>
                        </ Grid>
                        <Grid item height={250} width={width * 0.4}>
                            <div style={{ fontSize: "13px" }}>
                                <HeatMap xLabels={xLabels} yLabels={yLabels} data={newData} background={"#EA0014"} />
                            </div>
                        </Grid>
                        <Grid item>
                            <HeatMapLegend />
                        </Grid>
                        <Grid item align={"left"}>
                            No. of Reviews
                        </Grid>
                    </Grid>}
            </CardContent>
        </Card>
    );
}