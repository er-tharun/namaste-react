import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", {id:"heading", abc:"xyz"}, "Hello World from React JS");

console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);