import React from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../../actions/commentsActions'
import CommentsList from './commentsList'
import CommentsForm from './commentForm'

class CommentsContainer extends React.Component {
    componentDidMount() {
        this.props.fetchComments()
    }

    render() {
        return (
            <div className="section-container">
                <h2 className="section-title">Tips and Tricks</h2>
                <CommentsForm recipeId={this.props.recipeId}/>
                <section className="comments-thread">
                <CommentsList recipeId={this.props.recipeId}/>
                </section>
            </div>
        )
    }
}

export default connect(null, { fetchComments })(CommentsContainer);