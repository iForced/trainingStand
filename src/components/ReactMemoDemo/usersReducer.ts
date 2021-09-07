export const usersReducer = (state: Array<string>, action: {type: 'ADD_SVETA' | 'ADD_IGOR'}) => {
    switch (action.type) {
        case "ADD_SVETA":
            return [...state, 'Sveta']
        case "ADD_IGOR":
            return [...state, 'Igor']
        default:
            return state
    }
}