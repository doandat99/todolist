import React from "react";
import "./App.css";
// import ChildComponent from "./ChildComponent/ChildCoponent";
// import Couter from "./Couter/Couter";
import "bootstrap/dist/css/bootstrap.min.css";
import Todolist from "./React-Hook/Todolist";
import Count from "./React-Hook/Count";

function App() {
  return (
    <div className="App">
      {/* <ChildComponent>
            </ChildComponent> */}
      {/* <Couter></Couter> */}
      <Todolist />
      <Count />
    </div>
  );
}

export default App;
