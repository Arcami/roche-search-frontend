import React, { useState } from "react";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import "./style.css";

const App = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const searchUrl = process.env.REACT_APP_ENDPOINT;
    const url = `${searchUrl}?q=${encodeURIComponent(keyword)}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setResults(data || []);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div>
      <Header
        keyword={keyword}
        setKeyword={setKeyword}
        handleSearch={handleSearch}
      />
      <SearchResults results={results} />
    </div>
  );
};

export default App;
