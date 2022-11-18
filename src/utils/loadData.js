import mapData from "../data/mapData.json";

export function loadMapData(usState) {
    var result = mapData.filter(res => res["state"] == usState || usState == "")
    return result
}