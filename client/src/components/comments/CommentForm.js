import React from "react";
import { connect } from "react-redux";
import { createComment } from "../../actions/CommentsActions"

class CommentsForm extends React.Component {
    state = {
        author: '',
        content: '',
        recipe_id: this.props.recipeId
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createComment(this.state)
        event.target.reset();
    }

    render() {
        return(
            
            <div className="form-bg">
                <div className="comment-input">
                    <form className="form" onSubmit={this.handleSubmit}>
                    <input type='text' onChange={this.handleChange} id='author'  placeholder= "What's Your Name?" />
                        <textarea onChange={this.handleChange} id='content' placeholder= "Tell Us Your Tip" />
                        <button className="btn-primary" type='submit'>Add Tip</button>   
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, { createComment })(CommentsForm);    