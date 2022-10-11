import { RedditPost } from "../../models/RedditResponse";
import "./Post.css";

interface Props {
  post: RedditPost;
}

const Post = ({ post }: Props) => {
  return (
    <li className="Post">
      <h2>{post.data.title}</h2>
      {post.data.thumbnail !== "self" ? (
        <img src={post.data.thumbnail} alt={post.data.title} />
      ) : (
        <p>No Thumnail Image to display.</p>
      )}
      <a href={post.data.url}>Link to Post</a>
    </li>
  );
};

export default Post;
