import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
export default function Phonetic(props) {
  console.log(props.phonetic);
  if (props.phonetic.audio && props.phonetic.text) {
    function pronounsWord(event) {
      let audioUrl = props.phonetic.audio;
      if (props.phonetic.audio) {
        alert(`Audio is here:${audioUrl}`);
      } else {
        return null;
      }
    }
    return (
      <div>
        <FontAwesomeIcon
          icon={faVolumeHigh}
          type="button"
          onClick={pronounsWord}
        />{" "}
        <span>{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
