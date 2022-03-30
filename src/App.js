import "./App.css";
import { createContext } from "react";
import Demo from "./demo.js";

const Data = createContext();

function App() {
  return (
    <div className="App">
      <Data.Provider value={"welcome to context"}>
        <Demo />
      </Data.Provider>
    </div>
  );
}

export default App;
export { Data };
