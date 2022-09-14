export const fetchRecipes = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RECIPES' });
    fetch('https://powerful-savannah-59386.herokuapp.com/recipes')
      .then(response => response.json())
      .then(recipes => dispatch({ type: 'FETCH_RECIPES', recipes }))
  };
}

export const createRecipe = recipe => {
  return dispatch => {
    fetch('https://powerful-savannah-59386.herokuapp.com/recipes', {
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
    fetch(`https://powerful-savannah-59386.herokuapp.com/recipes/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(id => dispatch({ type: 'DELETE_RECIPE', id }))
      .then(() => history.replace('/'))
  }
}
