import { PostDetails, RedditPost } from "../../models/RedditResponse";
import "./Post.css";

interface Props {
  post: PostDetails;
}

const Post = ({ post }: Props) => {
  return (
    <li className="Post">
      <h2>{post.title}</h2>
      {post.thumbnail && post.thumbnail !== "self" ? (
        <img src={post.thumbnail} alt={post.title} />
      ) : (
        <p>No Thumnail Image to display.</p>
      )}
      <a href={post.url}>Link to Post</a>
    </li>
  );
};

export default Post;
