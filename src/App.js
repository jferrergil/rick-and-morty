import { Buttons } from "./components/Button";
import List from "./components/List";
import "./components/styles.css";

function App() {
  return (
    <div className="App">
      <header className="header"> Rick and Morty </header>
      <List />
      <Buttons />
    </div>
  );
}

export default App;
