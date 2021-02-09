import React, { Component } from "react";
import { ReactMediaRecorder } from "react-media-recorder";

class Recorder extends Component {
  saveRecording() {
    recording = ReactMediaRecorder.requestData();
  }

  render() {
    return (
      <ReactMediaRecorder
        video
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
            <button onClick={startRecording}>Start Recording</button> <br />
            <button onClick={stopRecording}>Stop Recording</button> <br />
            <video src={mediaBlobUrl} controls autoPlay loop /> <br />
            <button onClick={this.saveRecording}>Save Recording</button>
          </div>
        )}
      />
    );
  }
}

export default Recorder;
