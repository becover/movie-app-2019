import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

const Movie = ({ id, year, title, summary, poster, genres }) => {
  return (
    <Link
      to={{
        pathname:`/movie-app-2019/movie/${id}`,
        id,
        year,
        title,
        summary,
        poster,
        genres,
      }}
      className="movie__link"
    >
      <div className="movie__contain">
        <div className="movie__left">
          <img
            className="movie__left-poster"
            src={poster}
            alt={title}
            title={title}
          />
        </div>
        <div className="movie__right">
          <h2 className="movie__right-title">{title} <span className="movie__right-year">{year}</span></h2>
          <ul className="movie__right-genre">{genres.map((genre,index)=><li key={index}>{genre}</li>)}</ul>
          <p className="movie__right-summary">{summary.slice(0.150)}...</p>
        </div>
      </div>
    </Link>
  );
};

Movie.propTypes = {
  // id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
