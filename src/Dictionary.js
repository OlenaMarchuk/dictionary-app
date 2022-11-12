import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultedKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);
  function getPexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function getDictResponse(response) {
    setResults(response.data[0]);
  }
  function search() {
    //documentation: https//dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(getDictResponse);
    let apiPexelsKey = `563492ad6f9170000100000151f312400a614c77be93fa57afaa369c`;
    let apiPexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${apiPexelsKey}` };
    axios.get(apiPexelsUrl, { headers: headers }).then(getPexelsResponse);
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
      <div className="Dictionary">
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
