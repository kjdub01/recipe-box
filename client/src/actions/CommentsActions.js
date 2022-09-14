export const fetchComments = () => {
  return (dispatch) => {
    fetch('https://powerful-savannah-59386.herokuapp.com/comments')
      .then(response => response.json())
      .then(comments => dispatch({ type: "FETCH_COMMENTS", payload: comments }))
  }
}

export const createComment = comment => {
  return dispatch => {
    fetch('https://powerful-savannah-59386.herokuapp.com/comments', {
      method: 'POST',
      body: JSON.stringify({ comment: comment }),
      headers: { 'Content-Type': 'application/json', }
    })
      .then(response => response.json())
      .then(comment => dispatch({ type: 'CREATE_COMMENT', comment }))
  }
}