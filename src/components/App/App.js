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
  const [singleMovie, setSingleMovie] = useState('');
  const [wows, setWows] = useState([]);
  // const [ dropdown, setDropdown ] = useState( true );
  // const [search, setSearch] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

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

    // const filteredResults = movies.filter((movie) =>
    //       ((movie.movie).toUpperCase()).includes(search.toUpperCase()))
    //       // || ((movie.title).toLowerCase()).includes(search.toLowerCase()));

    //     setSearchResults(filteredResults.reverse());

  }, []);

  const displaySingleMovie = (timestamp) => {
    const moviePick = movies.find((movie) => movie.timestamp === timestamp);
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

  // const selectMovieFromDropdown = ( ) => {
  //   setDropdown( false )
  // }

  // const selectWowFromDropdown = ( ) => {
  //   setDropdown( false )
  // }

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <LandingPage singleMovie={singleMovie} setWows={setWows} />}
        />
        <Route
          exact
          path="/movies"
          render={() => (
            <div>
              <Nav
                movies={movies}
                displaySingleMovie={displaySingleMovie}
                displayWowCount={displayWowCount}
                randomize={randomize}
                // search={search}
                // setSearch={setSearch}
                wows={wows}
                setMovies={setMovies}
                setSingleMovie={setSingleMovie}
              />
              <MovieContainer
                movies={movies}
                wows={wows}
                displaySingleMovie={displaySingleMovie}
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
                // search={search}
                // setSearch={setSearch}
                wows={wows}
                setMovies={setMovies}
                singleMovie={singleMovie}
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

// const handleInput = (event) => {
//   const results = movies.filter((movie) => movie.movie.toLowerCase().includes(event.target.value.toLowerCase()))
//   setMovies( results )
// };
