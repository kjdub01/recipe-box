class CommentsController < ApplicationController
    def index
        comments = Comment.all
        render json: CommentSerializer.new(comments).to_serialized_json
    end

    def show
        comment = Comment.find_by(id: params[:id])
            if comment
                render json: CommentSerializer.new(comment).to_serialized_json
            else
                render json: "error"
            end
    end

    def create
        comment = Comment.new(comment_params)

        if comment.save
            render json: CommentSerializer.new(comment).to_serialized_json
        else 
            render json: "error"
        end
    end

    def destroy
        comment = Comment.find_by(id: params[:id])

        if comment.destroy
            render head :no_content
        else 
            render "error"
        end
    end
end