import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import { Route, Routes } from "react-router-dom";
import Routing from "./Components/Routing";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routing />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
