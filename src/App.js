import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import { Route, Routes } from "react-router-dom";
import Routing from "./Components/Routing";
import PageNotFound from "./Components/PageNotFound";
import User from "./Components/User";
import Contact from "./Components/Contact";
import Filter from "./Components/Filter";
import Post from "./Components/Post/Post";

function App() {
  return (
    <div className="App">
      <Routing />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/:id/:slug" element={<Post />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
