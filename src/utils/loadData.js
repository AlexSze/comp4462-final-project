import mapData from "../data/mapData.json";
import scatterPlot from "../data/scatterPlot.json";
import wordCloudData from "../data/wordCloudData.json";
import heatMapData from "../data/heatMapData.json";

import parallelCoordinateData from "../data/parallelCoordinate.json"
import rankingData from "../data/ranking.json"
export function loadMapData(usState) {
    // var result = mapData.filter(res => res["state"] == usState || usState == "")
    return mapData
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
    return heatMapData
}

export function loadParallelCoordinateData(include = true, usState, ...attributes) {
    var food_categories; // 10 categories from cloud (hard code)
    if(usState === "")
        food_categories = ["Burgers", "Bars", "Nightlife", "Pizza", "Italian", "Seafood", "Salad", "Beer", "Spanish", "Thai"];
    else if(usState === "Arizona")
        food_categories = ["Salad", "Mexican", "Beer", "Burgers", "Bars", "Thai", "Pizza", "Nightlife", "Italian", "Tacos"];
    else if(usState === "California")
        food_categories = ["Salad", "Mexican", "Japanese", "Burgers", "Bars", "Cafes", "Pizza", "Nightlife", "Fashion", "Seafood"];
    else if(usState === "Delaware")
        food_categories = ["Filipino", "Mexican", "Italian", "Pizza", "Irish", "Nightlife", "Bars", "Burgers", "Delis", "Sandwiches"];
    else if(usState === "Florida")
        food_categories = ["French", "Salad", "Pizza", "Bars", "Cafes", "Burgers", "Nightlife", "Italian", "Seafood", "Bars"];
    else if(usState === "Idaho")
        food_categories = ["Pizza", "Delis", "Coffee & Tea", "Nightlife", "Bars", "Beer", "Cocktail Bars", "Thai", "Salad", "Tours"];
    else if(usState === "Illinois")
        food_categories = ["Pizza", "Delis", "Greek", "Nightlife", "Bars", "Beer", "Soup", "Thai", "Salad", "Irish"];
    else if(usState === "Indiana")
        food_categories = ["Pizza", "Mexican", "Coffee & Tea", "Nightlife", "Bars", "Beer", "Caterers", "Thai", "Lounges", "Irish"];
    else if(usState === "Louisiana")
        food_categories = ["Pizza", "Mexican", "Cafes", "Nightlife", "Bars", "Burgers", "Salad", "Thai", "Lounges", "Irish"];
    else if(usState === "Missouri")
        food_categories = ["Pizza", "Mexican", "Delis", "Nightlife", "Bars", "Burgers", "Cafes", "Thai", "Greek", "Irish"];
    else if(usState === "Nevada")
        food_categories = ["Pizza", "Casinos", "Delis", "Nightlife", "Bars", "Burgers", "Cafes", "Thai", "Seafood", "Irish"];
    else if(usState === "New Jersey")
        food_categories = ["Pizza", "Pita", "Delis", "Nightlife", "Bars", "Burgers", "Cafes", "Thai", "Salad", "Irish"];
    else if(usState === "Pennsylvania")
        food_categories = ["Pizza", "Bagels", "Sandwiches", "Nightlife", "Bars", "Beer", "Cupcakes", "Thai", "Korean", "Bubble Tea"];
    else if(usState === "Tennessee")
        food_categories = ["Pizza", "Bakeries", "Mexican", "Burgers", "Bars", "Beer", "Irish", "Thai", "Beer", "Salad"];
    var result = parallelCoordinateData.filter(res => res["state_Full"] === usState || usState === "");

    let new_json = [];
    for (let i = 0; i < result.length; i++) {
        const dummy_Ambience = result[i]["Ambience"];
        var Ambiences = [];

        for (let a = 0; a < dummy_Ambience.length; a++) {
            if (dummy_Ambience[a].includes("divey"))
                Ambiences.push("divey");
            else if (dummy_Ambience[a].includes("hipster"))
                Ambiences.push("hipster");
            else if (dummy_Ambience[a].includes("casual"))
                Ambiences.push("casual");
            else if (dummy_Ambience[a].includes("touristy"))
                Ambiences.push("touristy");
            else if (dummy_Ambience[a].includes("trendy"))
                Ambiences.push("trendy");
            else if (dummy_Ambience[a].includes("intimate"))
                Ambiences.push("intimate");
            else if (dummy_Ambience[a].includes("romantic"))
                Ambiences.push("romantic");
            else if (dummy_Ambience[a].includes("classy"))
                Ambiences.push("classy");
            else if (dummy_Ambience[a].includes("upscale"))
                Ambiences.push("upscale");
            else if(dummy_Ambience[a].includes("None"))
                Ambiences.push("None");
            
        }
        const dummy_categories = result[i]["categories"];
        const opening_hours = result[i]["opening_hours"];
        const stars = result[i]["stars"];

        for (let j = 0; j < dummy_categories.length; j++) {
            if(food_categories.includes(dummy_categories[j]))
                for(let z = 0; z < Ambiences.length; z++){
                    const categories = dummy_categories[j];
                    const ambience = Ambiences[z];
                    new_json.push({ ambience, categories, opening_hours, stars });
                }
            
        }
    }
    // console.log(new_json);
    return new_json.slice(0, 100);
}

export function loadRankingData(usState) {
    var result = rankingData.filter(res => res["state_Full"] === usState || usState === "" || rankingData.value > 4.0);
    let new_json = [];
    var values = [];
    const labels = ["4<=x<=5", "3<=x<4", "2<=x<3", "1<=x<2", "0<=x<1"];

    values.push(result.filter(res=> res["value"] <= 5 && res["value"] >= 4).length);
    values.push(result.filter(res=> res["value"] < 4 && res["value"] >= 3).length);
    values.push(result.filter(res=> res["value"] < 3 && res["value"] >= 2).length);
    values.push(result.filter(res=> res["value"] < 2 && res["value"] >= 1).length);
    values.push(result.filter(res=> res["value"] < 1 && res["value"] >= 0).length);
    for(let i = 0; i < values.length; i++){
        const text = labels[i];
        const value = values[i];
        new_json.push({text, value});
    }
    console.log(new_json);  
    return new_json;
}