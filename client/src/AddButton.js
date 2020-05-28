import React from 'react'

const AddButton = props => {

    return <button className="action pull-right" onClick={props.toggleHidden}>Add Recipe</button>
}

export default AddButton;