import {
    Card, CardContent, Grid
} from "@mui/material";
import React, { useState } from "react";
import { loadScatterPlotData } from "../../utils/loadData";
import { scaleLinear } from "d3-scale";
import { max } from "d3-array"
import AttrDropdown, { attrToText } from "./attrDropdown";

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

    const w = 600;
    const h = 600;
    const margin = {
        top: 40,
        bottom: 40,
        left: 40,
        right: 40
    };

    const width = w - margin.right - margin.left,
        height = h - margin.top - margin.bottom;

    const xScale = scaleLinear()
        .domain([0, max(data, d => d["BMI"]) + 3]) // input range [min, max]
        .range([0, width]); //output range

    const yScale = scaleLinear()
        .domain([0, max(data, d => d[attr]) + 3])
        .range([height, 0]);

    const circles = data.map((d, i) => (
        <circle
            key={i}
            r={5}
            cx={xScale(d["BMI"])}
            cy={yScale(d[attr])}
            style={{ fill: "lightblue" }}
        />
    ));

    return (
        <Card variant="outlined">
            <CardContent >
                <Grid container spacing={1} direction="column" width={width}>
                    <Grid item align={"right"} marginRight={0.5}>
                        <AttrDropdown attr={attr} setAttrState={setAttrState} />
                    </Grid>
                    <Grid item marginLeft={margin.left / 7}>
                        <h2>{attrToText(attr)} vs BMI</h2>
                        <div>
                            <svg width={w} height={h}>
                                <g transform={`translate(${margin.left},${margin.top})`}>
                                    <AxisLeft yScale={yScale} width={width} />
                                    <AxisBottom xScale={xScale} height={height} />
                                    {circles}
                                </g>
                                <g transform={`translate(${13}, ${width / 2 + 2 * margin.left})`}>
                                    <g transform={`rotate(270)`}>
                                        <text>
                                            {attrToText(attr)}
                                        </text>
                                    </g>
                                </g>
                                <g transform={`translate(${width / 2 + margin.left},${height + 2 * margin.bottom})`}>
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