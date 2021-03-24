export const createRecipe = recipe => {
    return (dispatch) => {
      return fetch('http://localhost:3001/recipes', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({recipe: recipe})
      })
      .then(response => response.json())
      .then(recipe => {
        dispatch(createRecipe(recipe))
      })
      .catch(error => console.log(error))
    }
  };




  /*
  export const createMedication = medication => {
    return dispatch => {
      return fetch(`${API_URL}/medications`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({medication: medication})
      })
        .then(response => response.json())
        .then(medication => {
          dispatch(addMedication(medication))
          dispatch(resetMedicationForm())
        })
        .catch(error => console.log(error))
    };
  }
  */