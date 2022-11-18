import mapData from "../data/mapData.json";
import scatterPlot from "../data/scatterPlot.json";
import wordCloudData from "../data/wordCloudData.json";

export function loadMapData(usState) {
    var result = mapData.filter(res => res["state"] == usState || usState == "")
    return result
}

export function loadScatterPlotData() {
    return scatterPlot
}

export function loadWordCloudData(usState) {
    var data = wordCloudData.filter(res => res["state"] == usState || usState == "")

    // create a dictionary
    var result = {}
    data.map((res) => {
        var catList = res["categories"]
        catList.map((cat) => {
            if (cat in result) {
                // if exist -> add value
                result[cat] += 1;
            } else {
                // if not exist -> create new key with value 1
                result[cat] = 1;
            }
        })
    })

    return result
}
