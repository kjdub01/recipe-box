import React from "react";

class CommentsForm extends React.Component {
    state = {
        author: '',
        content: '',
    }

    render() {
        return(
            
            <div className="form-bg">
                <div className="comment-input">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <input type='text' value={this.state.author} onChange={this.handleChange} id='author' placeholder='Add your name'></input>
                        <textarea value={this.state.content} onChange={this.handleChange} id='content' placeholder='Tell us your suggestion'/>
                        <button className="btn-primary" type='submit'>Add Tip</button>   
                    </form>
                </div>
            </div>
        )
    }

}

export default CommentsForm;