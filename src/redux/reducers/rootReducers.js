import { combineReducers } from "redux";
import game_shop from './gameShopReducer';
import buscador from "./BuscadorReducer";

const rootReducers = combineReducers({
    game_shop,
    buscador

})

export default rootReducers;