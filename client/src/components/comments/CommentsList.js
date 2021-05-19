import React from 'react'
import { connect } from 'react-redux';

function CommentsList (props) {
    let associatedComments = props.comments.filter(comment => comment.recipe_id === props.recipeId)
    return(
        <div className="thread-container">
            { associatedComments && associatedComments.map(comment => {
                return (
                    <div className="thread-comment" key={comment.id}>
                        <div className="comment-content" >
                            <div className="comment-header">
                                <span className="comment-owner">{comment.author}</span>
                            </div>
                            <div className="comment-body">
                                {comment.content}
                            </div>
                            <div className="comment-actions">
                                <div className="helpful-actions">
                                    <span className="star-icon">
                                        <i className="zmdi zmdi-star-outline"></i>
                                    </span>
                                    5 
                                    This is helpful
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div> 
    )
}

const mapStateToProps = state => {
    return {comments: state.comments}
}

export default connect(mapStateToProps)(CommentsList);