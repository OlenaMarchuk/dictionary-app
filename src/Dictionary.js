import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  function search(event) {
    event.preventDefault();
    return alert(`Searching for ${keyword}`);
  }
  function changeWord(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary text-center">
      <form className="input-group mb-3" onSubmit={search}>
        <input
          type="search"
          className="form-control"
          placeholder="Search for any word or phrase"
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
