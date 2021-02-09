import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import { css } from "@emotion/css";
import YouTube from "react-youtube";
import { ReactMediaRecorder } from "react-media-recorder";
import Scene from "./Scene";
import UploadFile from "./UploadFile";
import Recorder from "./Recorder";

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
    <div
      className={css`
        margin-left: 70px;
      `}
    >
      <div className="youtube-player">
        <YouTube
          videoId="Hj1bin9Y4Ko"
          opts={opts}
          width="400px"
          height="400px"
        />
      </div>
      <div>
        <Scene />
      </div>

      <div
      // className={css`
      //   margin-left: 900px;
      // `}
      >
        <div>
          <Recorder />
        </div>
        <UploadFile />
      </div>

      <div className="buttons">
        {/* <button>record</button>
        <button>send</button> */}
      </div>
    </div>
  );
};

render(<StudentAssingment />, document.getElementById("root"));
