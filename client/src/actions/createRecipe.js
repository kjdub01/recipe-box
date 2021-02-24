export const createRecipe = (recipe) => {
    return (dispatch, getState) => {
        //async call to database
        return fetch('http://localhost:3001/recipes', {
          method: "POST",
          headers: {
            'Content-Type': 'application.json'
          },
          body: JSON.stringify({recipe: recipe})
        })
          .then (response => response.json())
          .then(recipe => {
            dispatch({ type: 'CREATE_RECIPE', recipe });
        }).catch((err) => {
          dispatch({ type: 'CREATE_RECIPE_ERROR', err})
        })
    }
  };