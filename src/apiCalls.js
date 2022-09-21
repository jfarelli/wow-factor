const fetchWows = ( pathAddress ) => {
    return fetch( `https://owen-wilson-wow-api.herokuapp.com/wows/${ pathAddress }` )
    .then( response => {
        if( !response.ok ) {
            throw Error( response.text )
        } else {
            return response.json( )
        }
    } )
    .catch( error => console.log( error ) )
}

export default fetchWows;