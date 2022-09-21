import './App.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import LandingPage from '../LandingPage/LandingPage';
import fetchWows from '../../apiCalls';
import { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";

const App = ( ) => {

  const [ movies, setMovies ] = useState( [ ] );
  const [ videos, setVideos ] = useState( [ ] );
  const [ singleMovie, setSingleMovie ] = useState( [ ] );
  

 useEffect( ( ) => {
    fetchWows( 'random?results=100' ).then( wow => {
      const newMovieArray = wow.map( movie => [ movie.movie, movie ] );
      const newMap = new Map( newMovieArray );
      const iterator = newMap.values( );
      const unique = [ ...iterator ];
      setMovies( unique );
      const movieClips = unique.map( movie => movie.video );
      setVideos( movieClips );
    } )
  }, [ ])


  const displaySingleMovie = ( timestamp ) => {
    const moviePick = movies.find( movie => movie.timestamp === timestamp )
    setSingleMovie( moviePick )
    // console.log('MOVIE PICK: ', moviePick)
  }
  

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={( ) =>  <LandingPage /> }/>
      </Switch>
      
        <Nav movies={ movies } displaySingleMovie={ displaySingleMovie }/>
      <Switch>
        
        <Route exact path='/details' render={ ( ) => <MovieDetails movie={ singleMovie } videos={ videos }/> } />

        <Route exact path='/movies' render={ ( ) => <MovieContainer movies={ movies } displaySingleMovie={ displaySingleMovie } /> } />
        
      </Switch>
        <Footer />

    </div>
  );
}

export default App;
