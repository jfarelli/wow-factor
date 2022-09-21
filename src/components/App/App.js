import './App.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import fetchWows from '../../apiCalls';
import { useEffect, useState } from 'react';

const App = ( ) => {

  const [ movies, setMovies ] = useState( [ ] );
  const [ videos, setVideos ] = useState( [ ] );

 useEffect( ( ) => {
    fetchWows( 'random?results=1' ).then( wow => {
      const newMovieArray = wow.map( movie => [ movie.movie, movie ] );
      const newMap = new Map( newMovieArray );
      const iterator = newMap.values( );
      const unique = [ ...iterator ]
      setMovies( unique )
      const movieClips = unique.map( movie => movie.video );
      setVideos( movieClips );
    } )
  }, [ ])
console.log(movies)

  return (
    <div className="App">
      <Nav />
      <MovieDetails movies={ movies } videos={ videos }/>
      {/* <MovieContainer movies={ movies } /> */}
      <Footer />
    </div>
  );
}

export default App;
