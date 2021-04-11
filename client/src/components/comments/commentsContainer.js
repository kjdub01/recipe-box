import React from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../../actions/commentsActions'
import CommentsList from './commentsList'

class CommentsContainer extends React.Component {
    componentDidMount() {
        this.props.fetchComments()
    }

    render() {
        return (
            <div className="section-container">
                <h2 className="section-title">Tips and Tricks</h2>
                <CommentsList recipeId={this.props.recipeId}/>
            </div>
        )
    }
}

export default connect(null, { fetchComments })(CommentsContainer);