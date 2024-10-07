import React from "react";

const SearchResults = ({ results }) => {
  const languages = ["en", "es", "de", "fr", "it"];
  const languageNames = {
    en: "English",
    es: "Spanish",
    de: "German",
    fr: "French",
    it: "Italian",
  };

  return (
    <div id="mainBody" className="container-fluid">
      {results.map((result, index) => {
        const { hit } = result;
        const {
          "previous-paragraph": previous,
          "main-paragraph": main,
          "next-paragraph": next,
        } = hit;

        return (
          <div key={index} className="card mb-4 full-width-card">
            <div className="card-header">
              <h3 className="text-center">
                <span>{main["document-name"]}</span>
              </h3>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered result-table">
                  <thead>
                    <tr>
                      {languages.map((lang) => (
                        <th key={lang}>{languageNames[lang]}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {languages.map((lang) => (
                        <td key={lang}>
                          {previous && (
                            <p
                              className="adjacent-paragraph"
                              dangerouslySetInnerHTML={{
                                __html: previous[lang],
                              }}
                            />
                          )}
                          {main && (
                            <p
                              className="main-paragraph"
                              dangerouslySetInnerHTML={{ __html: main[lang] }}
                            />
                          )}
                          {next && (
                            <p
                              className="adjacent-paragraph"
                              dangerouslySetInnerHTML={{ __html: next[lang] }}
                            />
                          )}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
