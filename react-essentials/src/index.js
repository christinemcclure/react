import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

function AppTwo() { 
  return (
    <h1>This is the second app</h1>
  );
}

ReactDOM.render(
  // Below is the same as writing <React.Fragment>: <>
  <>
  <App />
    {/* <AppTwo /> */}
    </>,
  document.getElementById("root")
);

