import React, { useState } from 'react';
import {useDispatch} from 'react-redux'


const BuscadorPokemon = () => {
    const dispatch = useDispatch();
    const [pokemon_name, set_pokemon_name] = useState('mewTwo');

    return(
        <div className="form-group">
            <label  htmlFor="buscar_pokemon" className="text-white">Buscar Pokemon</label>
            <input type="text" className="form-control" id="buscar_pokemon" value="pikachu"></input>
            <button className="btn btn-primary mt-3">Enviar</button>
        </div>
    )
}

export default  BuscadorPokemon