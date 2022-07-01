import {IBasket} from "../../types";

interface IAction {
    type: string;
    payload?: any
}

interface IStore {
    data: IBasket[]
}

const initialState:IStore = {
    data: []
}

export const basketReducer = (state = initialState, action:IAction) => {
    switch (action.type){
        case "ADD_BASKET":
            return {...state, data: [...state.data, action.payload]}
        case "REMOVE_BASKET":
            return {...state, data: state.data.filter(item => item.id !== action.payload)}
        default:
            return state
    }
}

export const basketReducerAction = (payload:IBasket) => ({type: "ADD_BASKET", payload})
export const removeBasketReducerAction = (payload:IBasket) => ({type: "REMOVE_BASKET", payload})