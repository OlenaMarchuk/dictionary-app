import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length) {
    return (
      <div className="Synonyms">
        <span>SYNONYM</span>
        {props.synonyms.map(function (synonym, index) {
          return (
            <ul key={index}>
              <li>{synonym}</li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
