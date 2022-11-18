import {
    Card, CardContent, Grid
} from "@mui/material";
import { loadWordCloudData } from "../../utils/loadData";
import WordCloud from "react-d3-cloud";
import UseWindowDimensions from "../../utils/dimension";

export default function OurWordCloud({ usState }) {
    const data = loadWordCloudData(usState)
    const { height, width } = UseWindowDimensions();

    const words = []
    for (var key in data) {
        var value = data[key];
        words.push({ text: key, value: value })
    }
    console.log(words)


    // processing size
    const totalCount = words.reduce((acc, word) => (acc += word.value), 0);
    words.forEach((word) => {
        // Add new property called `proportion`
        word.proportion = word.value / totalCount;
    });

    return (
        <Card variant="outlined">
            <CardContent id="word-cloud">
                <Grid container direction="column">
                    <Grid item align={"left"} >
                        <h2>Food Categories</h2>
                    </ Grid>
                    <Grid item height={height * 0.3} marginRight={height * 0.009} marginBottom={height * 0.005} >
                        <WordCloud
                            data={words}
                            width={210}
                            height={100}
                            font="Impact"
                            fontSize={(word) => (word.value === 0 ? 0 : 10 + word.proportion * 100)}
                            fill="Black"
                            rotate={0}
                            random={() => 4}
                        />
                    </ Grid>
                </ Grid>
            </ CardContent>
        </ Card>
    );
}