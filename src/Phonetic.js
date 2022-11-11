import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
export default function Phonetic(props) {
  console.log(props.phonetic);
  if (props.phonetic.audio && props.phonetic.text) {
    function pronounsWord(event) {
      let audio = new Audio(props.phonetic.audio);
      audio.play();
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
