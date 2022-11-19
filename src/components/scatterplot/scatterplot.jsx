import {
    Card, CardContent, Grid
} from "@mui/material";
import React, { useState } from "react";
import { loadScatterPlotData } from "../../utils/loadData";
import { scaleLinear } from "d3-scale";
import { max } from "d3-array"
import AttrDropdown, { attrToText } from "./attrDropdown";
import UseWindowDimensions from "../../utils/dimension";

const data = loadScatterPlotData();

function AxisBottom({ xScale, height }) {
    const textPadding = 10;

    const axis = xScale.ticks(10).map((d, i) => (
        <g className="x-tick" key={i}>
            <line
                style={{ stroke: "#e4e5eb" }}
                y1={0}
                y2={height}
                x1={xScale(d)}
                x2={xScale(d)}
            />
            <text
                style={{ textAnchor: "middle", fontSize: 12 }}
                dy=".71em"
                x={xScale(d)}
                y={height + textPadding}
            >
                {d}
            </text>
        </g>
    ));
    return <>{axis}</>;
}

function AxisLeft({ yScale, width }) {
    const textPadding = -20

    const axis = yScale.ticks(5).map((d, i) => (
        <g key={i} className="y-tick">
            <line
                style={{ stroke: "#e4e5eb" }}
                y1={yScale(d)}
                y2={yScale(d)}
                x1={0}
                x2={width}
            />
            <text
                style={{ fontSize: 12 }}
                x={textPadding}
                dy=".32em"
                y={yScale(d)}
            >
                {d}
            </text>
            <label>hi</label>
        </g>
    ));
    return <>{axis}</>;
}

export default function ScatterPlot() {
    const [attr, setAttrState] = useState("resFoodCount");
    const { height, width } = UseWindowDimensions();

    const w = width * 0.4;
    const h = 600;
    const margin = {
        top: 40,
        bottom: 40,
        left: 40,
        right: 40
    };

    const theWidth = w - margin.right - margin.left,
        theHeight = h - margin.top - margin.bottom;

    const xScale = scaleLinear()
        .domain([0, 50]) // input range [min, max]
        .range([0, theWidth]); //output range

    const yScale = scaleLinear()
        .domain([0, attr == "resFoodCount" ? 8100 : 850])
        .range([theHeight, 0]);

    const circles = data.map((d, i) => (
        <circle
            key={i}
            r={5}
            cx={xScale(d["prevalence"])}
            cy={yScale(d[attr])}
            style={{ fill: "lightblue" }}
        />
    ));

    return (
        <Card variant="outlined">
            <CardContent >
                <Grid container spacing={1} direction="column" width={theWidth}>
                    <Grid item align={"left"} >
                        <h2>{attrToText(attr)} vs BMI</h2>
                    </ Grid>
                    <Grid item align={"right"} marginRight={0.5}>
                        <AttrDropdown attr={attr} setAttrState={setAttrState} />
                    </ Grid>
                    <Grid item marginLeft={margin.left / 7}>
                        <div>
                            <svg width={w} height={h}>
                                <g transform={`translate(${margin.left},${margin.top})`}>
                                    <AxisLeft yScale={yScale} width={theWidth} />
                                    <AxisBottom xScale={xScale} height={theHeight} />
                                    {circles}
                                </g>
                                <g transform={`translate(${13}, ${theWidth / 2 + 2 * margin.left})`}>
                                    <g transform={`rotate(270)`}>
                                        <text>
                                            {attrToText(attr)}
                                        </text>
                                    </g>
                                </g>
                                <g transform={`translate(${theWidth / 2 + margin.left},${theHeight + 2 * margin.bottom})`}>
                                    <text>
                                        BMI
                                    </text>
                                </g>
                            </svg>
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </Card >
    );
}