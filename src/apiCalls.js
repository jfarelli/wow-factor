// const fetchWows = ( pathAddress ) => {
//     return fetch( `https://owen-wilson-wow-api.herokuapp.com/wows/${ pathAddress }` )
//     .then( response => {
//         if( !response.ok ) {
//             throw Error( response.text )
//         } else {
//             return response.json( )
//         }
//     } )
//     .catch( error => console.log( error ) )
// }

// export default fetchWows;


const fetchWows = async (pathAddress) => {
  try {
    const response = await fetch(`https://owen-wilson-wow-api.herokuapp.com/wows/${ pathAddress }`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("error", error);
  }
};

export default fetchWows;