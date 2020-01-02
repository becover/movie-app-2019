import React, { useEffect } from "react";
import "./Detail.css";

const Detail = ({ history, location }) => {
  const { year, title, summary, poster, genres } = location;
  useEffect(() => {
    if (location.title === undefined) history.push("/");
  }, [location, history]);
  return (
    <div className="detail__backgound">
      <div className="detail__img">
        <img src={poster} alt={title} title={title} />
      </div>
      <h2 className="detail__title">{title}</h2>
      <h3 className="datail__year">{year}</h3>
      <ul className="detail__genre">
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
      <p className="detail__summary">{summary}</p>
    </div>
  );
};

export default Detail;
