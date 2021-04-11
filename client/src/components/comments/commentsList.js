import React from 'react'
import { connect } from 'react-redux';

function CommentsList (props) {
    let associatedComments = props.comments.filter(comment => comment.recipe_id === props.recipeId)
    return(
        <section className="comments-thread">
            { associatedComments && associatedComments.map(comment => {
                return (
                    <div className="comment-content" key={comment.id}>
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
                )
            
            })}
        </section> 
    )
}

const mapStateToProps = state => {
    return {comments: state.comments}
}

export default connect(mapStateToProps)(CommentsList);