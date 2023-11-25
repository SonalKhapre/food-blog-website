import TopComponent from "./components/TopComponent";
import "./App.css";
import MidComponent from "./components/MidComponent";
import Slides from "./components/Slides";

import BottomComponent from "./components/BottomComponent";

function App() {
  return (
    <div className="App">
      <TopComponent />
      <MidComponent />
      <Slides />

      <BottomComponent />
    </div>
  );
}

export default App;
