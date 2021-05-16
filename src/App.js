import './App.css';
import Carousel from './carousel';
import CommonSymptoms from './commonSymptoms.js';
import SymptomComponents from './entersymptomsComponents';
import { BrowserRouter as Router,
Route,
Switch,
Link,
Redirect } from "react-router-dom";

function App() {

  return (
  
    <div>
                <Carousel/>
          <CommonSymptoms />
          <SymptomComponents />  
    </div>
  );
}

export default App;
