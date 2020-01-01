import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./components/Movie";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isLoaing, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovieList = async () => {
      const {
        data: {
          data: { movies }
        }
      } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
      console.log(movies);
      setMovieList(movies);
    };
    getMovieList();
  }, []);

  useEffect(() => {
    movieList !== [] && setIsLoading(false);
  }, [movieList]);

  return (
    <div>
      {isLoaing
        ? `loading...`
        : movieList.map(movie => (
            <Movie
              key={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
            />
          ))}
    </div>
  );
}

export default App;
