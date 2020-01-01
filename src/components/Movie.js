import React from "react";
import PropTypes from "prop-types";

const Movie = ({ id, year, title, summary, poster }) => {
  return (
    <div className="movie__contain">
      <div className="movie__left">
        <img className="movie__left-poster" src={poster} alt={title} title={title} />
      </div>
      <div className="movie__right">
        <h2 className="movie__right-title">{title}</h2>
        <h3 className="movie__right-year">{year}</h3>
        <p className="movie__right-summary">{summary}</p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
