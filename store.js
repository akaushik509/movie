import { legacy_createStore,combineReducers } from "redux";
import { Reducer } from "./redux/reducer";


const rootReducer = combineReducers({
    addWatchlist: Reducer,
    
});

export const store = legacy_createStore(rootReducer)