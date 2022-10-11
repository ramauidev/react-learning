import { RedditPost } from "../../models/RedditResponse";
import Post from "../Post/Post";
import "./PostsList.css";

interface Props {
  posts: RedditPost[];
}

const PostsList = ({ posts }: Props) => {
  return (
    <div className="PostsList">
      <ul>
        {posts.map((post) => (
          <Post post={post} key={post.data.id} />
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
