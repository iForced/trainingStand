import {ActionType} from "../Accordion/UncAccordionReducer";

type StateType = {
    isOpened: boolean
}
export const TOGGLE_OPENED = 'TOGGLE-OPENED'
export const selectReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_OPENED:
            return {...state, isOpened: !state.isOpened}
        default:
            throw new Error('wrong action')
    }
}