import { Card, CardContent, Grid } from "@mui/material";
import { ResponsiveParallelCoordinates } from "@nivo/parallel-coordinates";
import { filterYearsState, loadData, getShootingByID } from "../../utils";
import { getPoliticalStance, getStanceColor } from "../../utils/usMap";

const rawData = loadData(
  true,
  "S#",
  "Date",
  "State",
  "Gender",
  "Race_encoded",
  "Age",
  "Fatalities",
  "Injured",
  "Total victims",
  "Mental Health Issues"
);
const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const synonyms = {
  Church: ["church", "temple", "mosque"],
  Party: ["party"],
  // Restaurant: ["restaurant", "cafeteria", "cafe", "coffee shop"],
  Home: [
    "home",
    "house",
    "family",
    "mother",
    "father",
    "child",
    "son",
    "daughter",
    "apartment",
  ],
  // "Drive-by": ["drive-by", "drive by"],
  Club: ["club", "bar", "pub"],
  School: ["school", "teacher", "student", "university", "college"],
  // Street: ["street", "sidewalk", "roadside"],
  // "Gas station": ["gas station"],
  // "Post office": ["post office"],
  // Mall: ["mall", "shopping", "macy's", "plaza"],
  "Public facilities": [
    "public facilities",
    "city hall",
    "army",
    "government",
    "township",
    "navy",
    "train",
    "airport",
  ],
};

export default function ParallelCoordinate({ yearRange, usState, venues }) {
  const data = filterYearsState(rawData, yearRange, usState, venues);
  data.forEach((shooting) => {
    const d = new Date(shooting["Date"]);
    shooting["Weekday"] = weekdays[(d.getDay() + 6) % 7];
  });

  data.forEach((item) => {
    const shooting = getShootingByID(item["S#"]);
    const locs = Object.keys(synonyms);
    const str = (
      shooting["Title"] +
      shooting["Summary"] +
      shooting["Incident Area"] +
      JSON.stringify(shooting["NER"])
    ).toLowerCase();
    locs.forEach((element) => {
      for (let i in synonyms[element]) {
        if (!Object.keys(item).includes("Venue") && str.includes(synonyms[element][i])) {
          item["Venue"] = element;
          break;
        }
      }
    });
  });

  return (
    <Card variant="outlined">
      <CardContent>
        <h2>Parallel Coordinates</h2>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={12} style={{ height: 600 }}>
            <ResponsiveParallelCoordinates
              data={data}
              variables={[
                {
                  key: "Race_encoded",
                  type: "point",
                  values: ["Other", "Black", "Asian", "White"],
                  padding: 0.3,
                  ticksPosition: "before",
                  legend: "Race_encoded",
                  legendPosition: "start",
                  legendOffset: 20,
                },
                {
                  key: "Weekday",
                  type: "point",
                  values: weekdays,
                  ticksPosition: "after",
                  legend: "Weekday",
                  legendPosition: "start",
                  legendOffset: 20,
                },
                {
                  key: "Venue",
                  type: "point",
                  value: Object.keys(synonyms),
                  legend: "Venue",
                  legendPosition: "start",
                  legendOffset: -20,
                },
                {
                  key: "Fatalities",
                  type: "linear",
                  min: 0,
                  max: 40,
                  legend: "Fatalities",
                  legendPosition: "start",
                  legendOffset: -20,
                },
              ]}
              margin={{ top: 20, right: 70, bottom: 20, left: 60 }}
              colors={(item) => {
                return getStanceColor(getPoliticalStance(item["S#"]));
              }}
              lineOpacity={12 / data.length}
              theme={{
                axis: {
                  domain: {
                    line: {
                      stroke: "#777777",
                      strokeWidth: 2,
                    },
                  },
                },
              }}
            />
          </Grid>
          <Grid item></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}