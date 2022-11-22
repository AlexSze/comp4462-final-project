import {
    Card, CardContent, Grid
} from "@mui/material";
// Section 1
// import { loadWordCloudData } from "../../utils/loadData";
// import WordCloud from "react-d3-cloud";
import { useEffect, useState } from 'react';
import UseWindowDimensions from '../../utils/dimension';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';

export default function OurWordCloud({ usState }) {
    const { height, width } = UseWindowDimensions();
    const [loading, setLoading] = useState(true);

    // Remark:
    // Due to the overwhelming size, the following section can peralize computer with smaller than 32gb ram/
    // To fix this problem, we use our computer to take screenshot of the wordcloud and display wordcloud as images instead/
    // If you want to verify the function of our program and have a powerful computer please uncomment all Section 1s and comment all Section 2s

    // Section 1
    // const [data, setData] = useState(null);

    // const words = []

    // for (var key in data) {
    //     // filtering 
    //     if (!key.includes("Food") && !key.includes("Golf") && !key.includes("(New)")) {
    //         var value = data[key];
    //         words.push({ text: key, value: value })
    //     }
    // }

    // // processing size
    // const totalCount = words.reduce((acc, word) => (acc += word.value), 0);
    // words.forEach((word) => {
    //     // Add new property called `proportion`
    //     word.proportion = word.value / totalCount;
    // });

    // useEffect(() => {
    //     setLoading(true);
    //     const fetchData = async () => {
    //         const temp = await loadWordCloudData(usState)
    //         setData(temp);
    //         setLoading(false);
    //     }
    //     fetchData()
    //         .catch(console.error);
    // }, [usState])

    // Section 2
    const listOfAvailableState = ["Arizona", "California", "Delaware", "Florida", "Idaho", "Illinois", "Indiana", "Louisiana", "Missouri", "Nevada", "New Jersey", "Pennsylvania", "Tennessee"];
    const [path, setPath] = useState("allStates.jpg");
    useEffect(() => {
        setLoading(false)
        if (usState === "") {
            setPath("allStates.jpg");
        } else {
            setPath(usState.replace(/ /g, '').toLowerCase() + ".jpg");
        }
    }, [usState])
    return (
        <Card variant="outlined">
            <CardContent id="word-cloud">
                {loading ?
                    <Grid item align={"center"} width={width * 0.4} height={height * 0.4}>
                        <ReactSpinner />
                    </Grid> : <Grid container direction="column" width={width * 0.4}>
                        <Grid item align={"left"} >
                            <h2>Food Categories</h2>
                        </ Grid>
                        <Grid item height={height * 0.4} marginRight={height * 0.009} marginBottom={height * 0.005} >
                            {/* Section 1 */}
                            {/* {words.length === 0 ? <div> No Data </div> : <WordCloud
                                data={words}
                                width={210}
                                height={100}
                                font="Arial"
                                fontSize={(word) => (word.value === 0 ? 0 : 10 + word.proportion * 500)}
                                fill="Black"
                                rotate={0}
                                random={() => 1}
                            />} */}

                            {/* Section 2 */}
                            {
                                listOfAvailableState.includes(usState) || usState == "" ? <img src={path} ></img> : <div> No Data </div>
                            }
                        </ Grid>
                    </ Grid>}
            </ CardContent>
        </ Card>
    );
}