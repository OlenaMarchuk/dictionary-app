import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultedKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  function getResponse(response) {
    setResults(response.data[0]);
  }
  function search() {
    //documentation: https//dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(getResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeWord(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary ">
        <section>
          <h4 className="question">What word would you like to look up?</h4>
          <form className="input-group" onSubmit={handleSubmit}>
            <input
              type="search"
              className="form-control"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              defaultValue={props.defaultedKeyword}
              onChange={changeWord}
            />
          </form>
          <div className="hint">i.e. forest, sunset, phone...</div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
