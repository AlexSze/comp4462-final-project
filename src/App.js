import { useState } from 'react';
import DropDownState from './components/dropdown/dropDownState';
import Example from './components/example';
import {
  Grid
} from "@mui/material";
import Ranking from './components/ranking/ranking';
import Map from './components/map/map';
import ScatterPlot from './components/scatterplot/scatterplot';
import OurWordCloud from './components/wordCloud/wordcloud';
import UseWindowDimensions from './utils/dimension';
import OurHeatMap from './components/heatmap/heatmap';
import ParallelCoordinate from './components/parallelCoordinate/parallelCoordinate';

function App() {
  const [usState, setUsState] = useState("");
  const { height, width } = UseWindowDimensions();

  return (
    <div className="App">
      <DropDownState
        usState={usState}
        setUsState={setUsState}
      />
      <Grid container spacing={1.5} style={{ padding: 10 }}>
        <Grid item xs={5} container direction="column" spacing={2}>
          <Grid item >
            <Map usState={usState}/>
          </Grid>
          <Grid item>
            <ParallelCoordinate usState={usState} />
          </Grid>
          <Grid item>
            <Ranking usState={usState} />
          </Grid>
        </Grid>
        <Grid item xs={'auto'} container direction="column" spacing={2}>
          <Grid item width={width / 2.2} >
            <OurWordCloud usState={usState} />
          </Grid>
          <Grid item>
            <OurHeatMap usState={usState} />
          </Grid>
          <Grid item>
            <ScatterPlot />
          </Grid>
        </Grid>
      </Grid>
    </div >
  );
}

export default App;
