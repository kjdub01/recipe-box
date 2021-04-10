class CommentsController < ApplicationController
    def index
        comments = Comment.all
        render json: CommentsSerializer.new(comments).to_serialized_json
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

    private

    def comment_params
        params.require(:comment).permit(
            :author,
            :content
        )
    end
end