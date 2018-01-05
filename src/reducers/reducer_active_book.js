//not application state, only state this reducer is incharge of
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload
    }
    return state
}