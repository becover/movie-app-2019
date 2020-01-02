import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import { Link, Route } from "react-router-dom";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovieList = async () => {
      const {
        data: {
          data: { movies }
        }
      } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
      setMovieList(movies);
    };
    getMovieList();
  }, []);

  useEffect(() => {
    movieList.length !== 0 && setIsLoading(false);
  }, [movieList]);

  return (
    <>
      <ul>
        <li>
          <Link
            to={{
              pathname: "/",
              state: {
                movieList,
                isLoading
              }
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Route
        path="/"
        exact
        render={(movieList)=><Home state={movieList} />}
      />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </>
  );
}

export default App;
