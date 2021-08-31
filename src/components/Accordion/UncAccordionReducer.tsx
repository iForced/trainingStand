export type ActionType = {
    type: string
}
export type StateType = {
    isCollapsed: boolean
}
export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state, isCollapsed: !state.isCollapsed}
        default:
            throw new Error('wrong action')
    }
}