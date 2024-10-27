import React, { useState } from "react";

const Header = ({ keyword, setKeyword, handleSearch }) => {
  const [headerStyle, setHeaderStyle] = useState({
    height: "100vh",
    transition: "padding-top 0.6s, height 0.6s",
  });

  const handleInputChange = (e) => setKeyword(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
      animateHeader();
    }
  };

  const animateHeader = () => {
    setHeaderStyle({
      height: "30vh",
      transition: "padding-top 0.6s, height 0.6s",
    });
  };

  return (
    <header className="container-fluid" style={headerStyle}>
      <div id="searchBox">
        <h1>
          <img src="logo.png" alt="Rosearch" />
        </h1>
        <div className="form col-xs-12">
          <input
            className="col-xs-11 text-center"
            id="searchBar"
            type="text"
            placeholder="search for a word or sentence"
            value={keyword}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <div
            className="glyphicon glyphicon-search col-xs-1"
            onClick={() => {
              handleSearch();
              animateHeader();
            }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
