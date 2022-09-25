import "./App.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import MovieContainer from "../MovieContainer/MovieContainer";
import MovieDetails from "../MovieDetails/MovieDetails";
import LandingPage from "../LandingPage/LandingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import fetchWows from "../../apiCalls";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [videos, setVideos] = useState([]);
  const [singleMovie, setSingleMovie] = useState([]);
  const [wows, setWows] = useState([]);

  useEffect(() => {
    fetchWows("random?results=100").then((wow) => {
      const newMovieArray = wow.map((movie) => [movie.movie, movie]);
      const newMap = new Map(newMovieArray);
      const iterator = newMap.values();
      const unique = [...iterator];
      setMovies(unique);
      const movieClips = unique.map((movie) => movie.video);
      setVideos(movieClips);
    });
  }, []);

  const sortedMovies = movies.sort((a, b) => {
    let first = a.movie.toLowerCase(), second = b.movie.toLowerCase();
    if ( first < second){
      return -1
    }
    if (first > second ) {
      return 1
    }
  });

  const displaySingleMovie = (movieTitle) => {
    const moviePick = movies.find((movie) => movie.movie === movieTitle);
    setSingleMovie(moviePick);
  };

  const randomize = () => {
    const getRandom = movies[Math.floor(Math.random() * movies.length)];
    setSingleMovie(getRandom);
  };

  const displayWowCount = (wowCount) => {
    let wowPicks = movies.filter(
      (movie) => movie.total_wows_in_movie === parseInt(wowCount)
    );
    setWows(wowPicks);
  };

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <LandingPage setSingleMovie={setSingleMovie} setWows={setWows} />
          )}
        />
        <Route
          exact
          path="/movies"
          render={() => (
            <div className="nav-and-moviecontainer">
              <Nav
                movies={movies}
                displaySingleMovie={displaySingleMovie}
                displayWowCount={displayWowCount}
                randomize={randomize}
                wows={wows}
                setMovies={setMovies}
                setSingleMovie={setSingleMovie}
                sortedMovies={sortedMovies}
              />
              <MovieContainer
                movies={movies}
                wows={wows}
                displaySingleMovie={displaySingleMovie}
                sortedMovies={sortedMovies}
              />
            </div>
          )}
        />

        <Route
          exact
          path="/details"
          render={() => (
            <div>
              <Nav
                movies={movies}
                displaySingleMovie={displaySingleMovie}
                displayWowCount={displayWowCount}
                randomize={randomize}
                wows={wows}
                setMovies={setMovies}
                singleMovie={singleMovie}
                sortedMovies={sortedMovies}
              />
              <MovieDetails movie={singleMovie} videos={videos} />
            </div>
          )}
        />
        <Route
          path="*"
          render={() => (
            <div>
              <ErrorPage />
            </div>
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
