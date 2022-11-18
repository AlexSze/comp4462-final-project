import mapData from "../data/mapData.json";
import scatterPlot from "../data/scatterPlot.json";

export function loadMapData(usState) {
    var result = mapData.filter(res => res["state"] == usState || usState == "")
    return result
}

export function loadScatterPlotData() {
    return scatterPlot
}