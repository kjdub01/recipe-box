import React from 'react'

class AddButton extends React.Component {

    render() {
        return (
            <button 
                className="action pull-right"
                onClick={this.toggleHidden}
            >
            Add Recipe
            </button>
        );
    }
}

export default AddButton;