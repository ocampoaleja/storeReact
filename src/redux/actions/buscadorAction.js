import Axios from "axios";

export const FETCH_POKEMON_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";

//Actions
export const fetchPokemonRequest = () => {
    return(
        type: FETCH_POKEMON_REQUEST
    )
}

export const fetchPokemonSucess = (Pokemon) => {
    return(
        type: FETCH_POKEMON_SUCCESS,
        payload:Pokemon
    )
}

export const fetchPokemonFailure = (error) => {
    return(
        type: FETCH_POKEMON_FAILURE,
        payload:error
    )
}

const fetchPokemon = (valor) => {
    return(dispatch) => {
        dispatch(fetchPokemonRequest());
        Axios.get(`https://pokeapi.co/api//v2/pokemon/${valor}`)
        .then(response => {
            dispatch(fetchPokemonSucess([response.data]))
        })
        .catch(error => {
            dispatch(FETCH_POKEMON_FAILURE('No se encontro el pkemon'))
        })
    }
}

export default fetchPokemon;