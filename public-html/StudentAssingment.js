import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import { css } from "@emotion/css";
import YouTube from "react-youtube";
import Scene from "./Scene";
import UploadFile from "./UploadFile";
import Recorder from "./Recorder";
import Score from "./Score";

const StudentAssingment = () => {
  const character = "Simba";

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
      <h1>you will be playing {character}</h1>
      <div className="youtube-player">
        <YouTube
          videoId="Hj1bin9Y4Ko"
          opts={opts}
          width="400px"
          height="400px"
        />
      </div>
      <div>
        <Scene character={character} />
      </div>

      <div
      // className={css`
      //   margin-left: 900px;
      // `}
      >
        <div>
          <Recorder />

          <UploadFile />
        </div>
        <br />
        <Score />
        <br />
      </div>
    </div>
  );
};

render(<StudentAssingment />, document.getElementById("root"));
