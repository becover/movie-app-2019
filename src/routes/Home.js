import React from "react";
import Movie from "../components/Movie";

const Home = ({ state: movies }) => {
  return (
    <section>
      {movies.map(movie => (
        <Movie
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genres={movie.genres}
        />
      ))}
    </section>
  );
};

export default Home;
