import React, { lazy, Suspense } from "react";
import ReactPlayer from "react-player";
import { render } from "react-dom";
import YouTube from "react-youtube";
import Scene from "./Scene";

const StudentAssingment = () => {
  //   state = { actor: "Simba" };
  // record = () => {};
  // send = () => {};

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <div className="youtube-player">
        <YouTube videoId="Hj1bin9Y4Ko" opts={opts} />
      </div>
      <div className="fullscript">
        <h1>We Are All Connected</h1>
        <Scene />
      </div>

      <div className="buttons">
        {/* <button>record</button>
        <button>send</button> */}
      </div>
    </div>
  );
};

render(<StudentAssingment />, document.getElementById("root"));
