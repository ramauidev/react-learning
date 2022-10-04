import Post from "../../models/Post";
import "./PostInList.css";

interface Props {
  post: Post;
}

const PostInList = ({ post }: Props) => {
  return (
    <div className="PostInList">
      <div className="post-details">
        <p className="post-title">{post.title}</p>
        <p>{post.thought}</p>
      </div>
      <div className="post-action">
        <button>
          <i className="material-icons">delete</i>
        </button>
      </div>
    </div>
  );
};

export default PostInList;
