import { filterReducer } from "./reduc/fiter-reducer";
import { combineReducers, legacy_createStore as createStore, compose, applyMiddleware} from 'redux'
import { shoesReducer } from "./reduc/shoes-reducer";
import thunk from "redux-thunk";
import { unitsReducer } from "./reduc/units-reducer";
import { unitsDetReducer } from "./reduc/unitDet-reducer";
import { menShoesReducer } from "./reduc/menshoes-reducer";
import { infoShoes } from "./reduc/infoshoes-reducer";


let reducer = combineReducers({
    filter : filterReducer,
    shoes: shoesReducer,
    unit: unitsReducer,
    unitDetails: unitsDetReducer,
    sneak: menShoesReducer,
    info: infoShoes
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))



