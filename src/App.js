import './App.css';
import { BillInput} from './BillInput/BillInput';
import {TipPercentageButtons} from "./TipPercentageButtons/TipPercentageButtons"

function App() {
  return (
    <div className="App">
    <BillInput  label="Bill"/>
    {/* <BillInput label="Number of People"/> */}
    {/* <TipPercentageButtons /> */}
    {/* <input style={{width: "200px"}} type="radio" name="test" /> */}
    </div>
  );
}

export default App;
