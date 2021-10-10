import React, { useState } from "react";
import "./DictionaryForm.css";
import axios from "axios";
import Results from "./Results.js";

export default function DictionaryForm() {
  let [keyword, setKeyword] = useState(null);
let [results, setResults] = useState (null);

  function handleResponse(response) {
    console.log(response.data);
    setResults (response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}..`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="search-form">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word...."
          autoFocus={true}
          onChange={handleKeyword}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
