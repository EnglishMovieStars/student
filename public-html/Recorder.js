import React, { Component } from "react";
import { ReactMediaRecorder } from "react-media-recorder";

class Recorder extends Component {
  state = {
    startRecordingEnable: true,
  };
  saveRecording() {
    recording = ReactMediaRecorder.requestData();
  }

  setStartRecordingEnable = (func) => {
    return () => {
      func();

      this.setState({ startRecordingEnable: !this.state.startRecordingEnable });
    };
  };

  render() {
    const { startRecordingEnable } = this.state;
    return (
      <ReactMediaRecorder
        audio
        render={({ startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
            {startRecordingEnable ? (
              <button onClick={this.setStartRecordingEnable(startRecording)}>
                Start Recording
              </button>
            ) : (
              <button onClick={this.setStartRecordingEnable(stopRecording)}>
                Stop Recording
              </button>
            )}
            <br />
            <video src={mediaBlobUrl} controls autoPlay loop /> <br />
          </div>
        )}
      />
    );
  }
}

export default Recorder;
