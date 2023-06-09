// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// ReactDOM.render(<App/>,document.getElementById("root"));
import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";
import MultiSelect from './Multiselect';

const App = () => {
  return (
    <div>
      <h1>Multi-Select Dropdown</h1>
      <MultiSelect value={['1', '2']} readonly={false} />
    </div>
  );
};

ReactDOM.render(<App/>,document.getElementById("root"));