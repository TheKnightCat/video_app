import React from "react";
import ReactPlayer from "react-player";

import "./App.css";
import vid from "./SnowyTrees.mp4";

function App() {
  return (
    <div className="App">
      <ReactPlayer url={"https://youtu.be/WjoplqS1u18"} volume={false} />
      <video
        src={vid}
        autoPlay
        controls
        height="300px"
        width="400px"
        datatype="video/mp4"
      />
    </div>
  );
}

export default App;
