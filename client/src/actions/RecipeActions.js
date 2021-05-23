export const fetchRecipes = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RECIPES' });
    fetch('http://localhost:3001/recipes')
      .then(response => response.json())
      .then(recipes => dispatch({ type: 'FETCH_RECIPES', recipes }))
  };
}


export const createRecipe = recipe => {
  console.log("b")
  return dispatch => {
    console.log("c")
    fetch('http://localhost:3001/recipes', {
      method: 'POST',
      body: JSON.stringify({ recipe: recipe }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(recipe => {
        console.log("d")
        return dispatch({ type: 'CREATE_RECIPE', recipe })
      })
    console.log("e")
  }
  console.log("f")
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
