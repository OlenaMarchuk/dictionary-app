import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  function getResponse(response) {
    console.log(response.data);
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
    </div>
  );
}
