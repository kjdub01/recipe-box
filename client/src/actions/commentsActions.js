export const fetchComments = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/comments')
        .then(response => response.json())
        .then(comments => dispatch({ type: "FETCH_COMMENTS", payload: comments}))
    }
}