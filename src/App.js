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
      <Grid item container xs={12} style={{ padding: 6 }}>
        <Map usState={usState} />
      </Grid>
      <Grid item container direction="row" xs={12} >
        <Grid item container direction="column" xs={6} spacing={2} style={{ paddingRight: 2 }}>
          <Grid item container>
            <ParallelCoordinate usState={usState} />
          </Grid>
          <Grid item container>
            <Ranking usState={usState} />
          </Grid>
        </Grid>

        <Grid item container direction="column" xs={6} spacing={2}>
          <Grid item container>
            <OurWordCloud usState={usState} />
          </Grid>
          <Grid item container>
            <OurHeatMap usState={usState} />
          </Grid>
          <Grid item container>
            <ScatterPlot />
          </Grid>
        </Grid>
      </Grid>
    </div >
  );
}

export default App;
