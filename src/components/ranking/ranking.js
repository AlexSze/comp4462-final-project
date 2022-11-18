import { Bar } from "react-chartjs-2";
import {
    Card, CardContent, Grid, Typography
} from "@mui/material";

//const rawData = loadData(true, "S#", "Date", "State", "Gender", "Race_encoded", "Age");

export default function Ranking(props) {
    return (
        <Card variant="outlined">
            <CardContent>
                {/* TODO */}
                <Bar
                    data={{
                    // Name of the variables on x-axies for each bar
                    labels: ["1st bar", "2nd bar", "3rd bar", "4th bar"],
                    datasets: [
                    {
                        // Label for bars
                        label: "total count/value",
                        // Data or value of your each variable
                        data: [1552, 1319, 613, 1400],
                        // Color of each bar
                        backgroundColor: ["aqua", "green", "red", "yellow"],
                        // Border color of each bar
                        borderColor: ["aqua", "green", "red", "yellow"],
                        borderWidth: 0.5,
                    },
                    ],
                }}
                // Height of graph
                height={400}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                    yAxes: [
                        {
                        ticks: {
                            // The y-axis value will start from zero
                            beginAtZero: true,
                        },
                        },
                    ],
                    },
                    legend: {
                    labels: {
                        fontSize: 15,
                    },
                    },
                }}
            />
            </CardContent>
        </ Card>
    )
}

/* export default function Ranking(props) {
  //const data = filterYearsState(rawData, yearRange, usState, venues);
  //const raceData = getRaceData(data);
  //const ageData = getAgeData(data);

  return (
    <Card variant="outlined">
        <CardContent>
        <h2>Ranking</h2>
        <Grid container direction="row" spacing={1}>
          <Bar
            data={{
                // Name of the variables on x-axies for each bar
                labels: ["1st bar", "2nd bar", "3rd bar", "4th bar"],
                datasets: [
                {
                    // Label for bars
                    label: "total count/value",
                    // Data or value of your each variable
                    data: [1552, 1319, 613, 1400],
                    // Color of each bar
                    backgroundColor: ["aqua", "green", "red", "yellow"],
                    // Border color of each bar
                    borderColor: ["aqua", "green", "red", "yellow"],
                    borderWidth: 0.5,
                },
                ],
            }}
            // Height of graph
            height={400}
            options={{
                maintainAspectRatio: false,
                scales: {
                yAxes: [
                    {
                    ticks: {
                        // The y-axis value will start from zero
                        beginAtZero: true,
                    },
                    },
                ],
                },
                legend: {
                labels: {
                    fontSize: 15,
                },
                },
            }}
            />      
      </Grid>
      </CardContent>
    </ Card>
  );
}*/