import { useState } from 'react';
import DropDownState from './components/dropdown/dropDownState';

function App() {
  const [usState, setUsState] = useState("");

  return (
    <div className="App">
      <DropDownState
        usState={usState}
        setUsState={setUsState}
      />
    </div>
  );
}

export default App;
