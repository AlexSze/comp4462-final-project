import mapData from "../data/mapData.json";
import scatterPlot from "../data/scatterPlot.json";
import wordCloudData from "../data/wordCloudData.json";
import heatMapData from "../data/heatMapData.json";

import parallelCoordinateData from "../data/parallelCoordinate.json"
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

export function loadHeatMapData(usState) {
    return heatMapData;
}
export function loadParallelCoordinateData(include=true, usState, ...attributes){
    var result = parallelCoordinateData.filter(res => res["state_Full"] === usState || usState === "")

    for (let i = 0; i < attributes.length; ++i) {
        if (!attributes.includes(attributes[i])) {
          attributes.splice(i, 1);
          --i;
        }
    }
    
    if (attributes.length === 0) return result;
    result = result.map((restaurant) =>
    Object.fromEntries(
        Object.entries(restaurant).filter(([key, value]) =>
        include ? attributes.includes(key) : !attributes.includes(key)
        )
    )
    );
    // console.log(result);
    // return result;
    
    let new_json = [];
    for(let i = 0; i < result.length; i++){
        const dummy_Ambience = result[i]["Ambience"].split(", ");
        var ambience;
        // console.log(dummy_Ambience);
        for(let a = 0; a < dummy_Ambience.length; a++){
            if(dummy_Ambience[a].includes("True")){
                if(dummy_Ambience[a].includes("divey"))
                    ambience = "divey";
                else if(dummy_Ambience[a].includes("hipster"))
                    ambience = "hipster";
                else if(dummy_Ambience[a].includes("casual"))
                    ambience = "casual";
                else if(dummy_Ambience[a].includes("touristy"))
                    ambience = "touristy";
                else if(dummy_Ambience[a].includes("trendy"))
                    ambience = "trendy";
                else if(dummy_Ambience[a].includes("intimate"))
                    ambience = "intimate";
                else if(dummy_Ambience[a].includes("romantic"))
                    ambience = "romantic";
                else if(dummy_Ambience[a].includes("classy"))
                    ambience = "classy";
                else if(dummy_Ambience[a].includes("upscale"))
                    ambience = "upscale";
            }
        }
        console.log(ambience);
        const dummy_categories = result[i]["categories"].split(", ");
        const opening_hours = result[i]["opening_hours"];
        const stars = result[i]["stars"];

        for(let j = 0; j < dummy_categories.length; j++){
            const categories = dummy_categories[j];
            new_json.push({ambience, categories,  opening_hours, stars});
        }
    }
    console.log(new_json);
      return new_json;
      
}