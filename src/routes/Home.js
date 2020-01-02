import React from "react";
import Movie from "../components/Movie";

const Home = props => {
  const {
    state: {
      location: {
        state: { movieList, isLoading }
      }
    }
  } = props;
  return (
    <section>
      {isLoading
        ? `loading...`
        : movieList.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
            />
          ))}
    </section>
  );
};

export default Home;
