import React from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../../actions/commentsActions'
import CommentsList from './commentsList'

class CommentsContainer extends React.Component {
    componentDidMount() {
        this.props.fetchComments()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                comments container
                <CommentsList recipeId={this.props.recipeId}/>
            </div>
        )
    }
}

export default connect(null, { fetchComments })(CommentsContainer);