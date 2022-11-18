import { useState } from 'react';
import DropDownState from './components/dropdown/dropDownState';
import Example from './components/example';
import {
  Grid
} from "@mui/material";
import Ranking from './components/ranking/ranking';

function App() {
  const [usState, setUsState] = useState("");

  return (
    <div className="App">
      <DropDownState
        usState={usState}
        setUsState={setUsState}
      />
      <Grid container spacing={1.5} style={{ padding: 10 }}>
        <Grid item xs={5} container direction="column" spacing={2}>
          <Grid item>
            <Example />
          </Grid>
          <Grid item>
            <Example />
          </Grid>
          <Grid item>
            <Example />
          </Grid>
        </Grid>
        <Grid item xs={5} container direction="column" spacing={2}>
          <Grid item>
            <Example />
          </Grid>
          <Grid item>
            <Example />
          </Grid>
          <Grid item>
            <Ranking />
          </Grid>
        </Grid>
      </Grid>
    </div >
  );
}

export default App;
