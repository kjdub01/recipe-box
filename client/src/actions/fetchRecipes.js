export function fetchRecipes() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RECIPES' });
    fetch('http://localhost:3001/recipes')
      .then(response => response.json())
      .then(recipes => dispatch({ type: 'ADDING_RECIPES', recipes }))
    };
  }