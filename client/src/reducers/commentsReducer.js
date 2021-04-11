export const commentsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_COMMENTS':
            return action.payload

        case 'CREATE_COMMENTS':
            return{ ...state,
                comments: [...state.comments, action.comment]
            }

        default:
            return state
    }
}

//export default commentsReducer;