import React, { useState } from "react";
import "./DictionaryForm.css";
import axios from "axios";

export default function DictionaryForm() {
  let [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response);
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
    </div>
  );
}
