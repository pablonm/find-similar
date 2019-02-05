import React, { memo, Fragment } from "react";
import PropTypes from "prop-types";
import { Result, NoResults, Error } from "./ResultsStyle";

const getEmoji = type => {
  switch (type) {
    case "music":
      return (
        <span role="img" aria-label="music" className="emoji">
          🎵
        </span>
      );
    case "movie":
      return (
        <span role="img" aria-label="movie" className="emoji">
          🎥
        </span>
      );
    case "show":
      return (
        <span role="img" aria-label="show" className="emoji">
          📺
        </span>
      );
    case "book":
      return (
        <span role="img" aria-label="book" className="emoji">
          📖
        </span>
      );
    case "author":
      return (
        <span role="img" aria-label="author" className="emoji">
          ✒️
        </span>
      );
    case "game":
      return (
        <span role="img" aria-label="game" className="emoji">
          🎮
        </span>
      );
    default:
      return null;
  }
};

const searchResult = result => {
  const query = `${result.Name} ${result.Type}`;
  window.open(`https://www.google.com/search?q=${query}`, "_blank");
};

export const Results = props => {
  const { results, error } = props;
  if (results !== null)
    return (
      <Fragment>
        <div>
          {results.length > 0 ? (
            results.map((result, i) => (
              <Result
                key={`result${i + 1}`}
                onClick={() => searchResult(result)}
              >
                {getEmoji(result.Type)} {result.Name}
              </Result>
            ))
          ) : (
            <NoResults>
              <span aria-label="sorry" role="img">
                😱
              </span>
              Sorry, no results.
            </NoResults>
          )}
        </div>
        {error && <Error>{error}</Error>}
      </Fragment>
    );
  return null;
};

Results.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Type: PropTypes.string.isRequired
    })
  ),
  error: PropTypes.string
};

Results.defaultProps = {
  results: null,
  error: null
};

export default memo(Results);
