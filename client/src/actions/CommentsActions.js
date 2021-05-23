export const fetchComments = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/comments')
      .then(response => response.json())
      .then(comments => dispatch({ type: "FETCH_COMMENTS", payload: comments }))
  }
}

export const createComment = comment => {
  return dispatch => {
    fetch('http://localhost:3001/comments', {
      method: 'POST',
      body: JSON.stringify({ comment: comment }),
      headers: { 'Content-Type': 'application/json', }
    })
      .then(response => response.json())
      .then(comment => dispatch({ type: 'CREATE_COMMENT', comment }))
  }
}