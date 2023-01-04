import Nav from "./components/Nav";

import "./App.css";
import { Searchbar } from "./components/Searchbar";
import TitleBar from "./components/catogeries/TitleBar";
import { Cards } from "./components/catogeries/Cards";

function App() {
  return (
    <div>
      <Nav />
      <div className="md:px-16 px-5">
        <Searchbar />
      </div>
      <div className="md:px-12 px-5">
        <TitleBar />
        <Cards />
      </div>
    </div>
  );
}

export default App;
