export const fetchRecipes = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RECIPES' });
    fetch('http://localhost:3001/recipes')
      .then(response => response.json())
      .then(recipes => dispatch({ type: 'FETCH_RECIPES', recipes }))
  };
}

export const createRecipe = recipe => {
  return dispatch => {
    fetch('http://localhost:3001/recipes', {
      method: 'POST',
      body: JSON.stringify({ recipe: recipe }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(recipe => {
        return dispatch({ type: 'CREATE_RECIPE', recipe })
      })
  }
}

export const deleteRecipe = (id, history) => {
  return dispatch => {
    fetch(`http://localhost:3001/recipes/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(id => dispatch({ type: 'DELETE_RECIPE', id }))
      .then(() => history.replace('/'))
  }
}
