import React, { useState } from "react";
import "./DictionaryForm.css";

export default function DictionaryForm() {
  let [keyword, setKeyword] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}..`);
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
