import React, { Component, useState } from "react";
import exampleResponseSpeechace from "./exampleResponseSpeechace";

class Score extends Component {
  state = {
    avarege_quality_score: 0,
    avarege_stress_score: 0,
    syllable_score_list: [],
  };

  getScore = () => {
    const syllable_score_list =
      exampleResponseSpeechace.text_score.word_score_list[0]
        .syllable_score_list;
    let avarege_quality_score =
      syllable_score_list.reduce((a, b) => a.quality_score + b.quality_score) /
      syllable_score_list.length;
    let avarege_stress_score =
      syllable_score_list.reduce((a, b) => a.stress_score + b.stress_score) /
      syllable_score_list.length;

    this.setState({ avarege_quality_score, avarege_stress_score });
  };
  sendToTeacher() {
    // send score and audio
  }

  render() {
    const { avarege_quality_score, avarege_stress_score } = this.state;

    return (
      <div>
        <button onClick={this.getScore}>Check my score</button>
        <br />
        {avarege_quality_score > 0 ? (
          <label> quality score: {avarege_quality_score}</label>
        ) : null}
        <br />
        {avarege_stress_score > 0 ? (
          <label> stress score: {avarege_stress_score}</label>
        ) : null}
        <br />
        <br />
        <button onClick={this.sendToTeacher}>Send to my teacher</button>
      </div>
    );
  }
}
export default Score;
