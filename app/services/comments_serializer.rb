class CommentsSerializer

    def initialize(comments_object)
      @comments = comment_object
    end
  
    def to_serialized_json
      options = {
        except: [:created_at, :updated_at]
      }
  
      @comments.to_json(options)
    end
  end