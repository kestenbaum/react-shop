import {IItem} from "../../types";
import stalker from "../../assets/stalker.png"
import dark from "../../assets/dark.jpg"

interface gameAction {
    type: string
    payload?: any
}

interface IState {
    data: IItem[]
}

const initialState: IState = {
    data: [
        {
            id: 1,
            title: "Stalker 2",
            img:  stalker,
            body: "description",
            cost: 'UAH',
            current: 750
        },
        {
            id: 2,
            title: "Dark Soul III",
            img:  dark,
            body: "description",
            cost: 'UAH',
            current: 1500
        }
    ]
}

export const gameReducer = (state= initialState, action: gameAction) => {
    switch (action.type){
        case "GET_GAME":
            return {...state}
        default:
            return state
    }
}