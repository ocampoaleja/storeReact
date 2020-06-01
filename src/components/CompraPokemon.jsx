import React, { Component } from 'react';
import {connect} from 'react-redux'

import {buy_pokemon_action, return_pokemon_action} from '../redux/actions/gameShopAction'

class CompraPokemon extends Component{
    render(){
        return(
            <div>
                <button className="btn btn-dark btn-sm mb-2">Comprar Pokemon</button>
                <button className="btn btn-dark btn-sm">Regresar Pokemon</button>
            </div>
        )
    }
}

const mapDispatchToProps={
    buy_pokemon_action,
    return_pokemon_action

};

export default connect(null, mapDispatchToProps)(CompraPokemon);