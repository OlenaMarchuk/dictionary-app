import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);
  function getResponse(response) {
    setResults(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(getResponse);
  }
  //documentation: https//dictionaryapi.dev
  function changeWord(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary text-center">
      <form className="input-group mb-3" onSubmit={search}>
        <input
          type="search"
          className="form-control"
          placeholder="Search for any word"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={changeWord}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </form>
      <Results results={results} />
    </div>
  );
}
