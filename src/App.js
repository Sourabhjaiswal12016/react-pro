import "./App.css";
import Discover from "./components/Discover/Discover.js";
import Home from "./components/Home/Home.js";
import CardOne from "./components/AllCards/CardOne.js";
import CardTwo from "./components/AllCards/CardTwo.js";
import CardThree from "./components/AllCards/CardThree.js";
import CardFour from "./components/AllCards/CardFour.js";
import CardFive from "./components/AllCards/CardFive.js";
function App() {
  return (
    <div className="App">
      <Home />
      <Discover />
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
      <CardFive />
    </div>
  );
}

export default App;
