import "./App.css";
import NavBar  from "./components/NavBar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
       <SearchBar />
      </div>
    </div>
  );
}

export default App;
