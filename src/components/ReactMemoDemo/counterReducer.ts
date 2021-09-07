export const counterReducer = (state: number, action: {type: 'ADD' | 'SUB'}) => {
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'SUB':
            return state - 1
        default:
            return state
    }
}