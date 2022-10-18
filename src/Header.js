import React from "react";

import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <button>
        <i class="bi bi-geo-alt-fill"></i>
      </button>
      <form>
        <input
          type="text"
          placeholder="Enter a city"
          autocomplete="off"
          className="searchBar"
        />
        <input type="submit" value="Search" className="searchButton" />
      </form>
    </div>
  );
}