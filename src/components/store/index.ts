import {combineReducers, createStore} from "redux";
import {gameReducer} from "./reducers/gameReducer";
import {basketReducer} from "./reducers/basketReducer";



const rootReducer = combineReducers({
    game: gameReducer,
    basket: basketReducer
})
export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>