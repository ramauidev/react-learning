import { useState } from "react";
import Post from "../../models/Post";
import "./SocialPosts.css";
import PostInList from "../PostInList/PostInList";

const SocialPosts = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      title: "Grand Circus",
      thought: "Grand Circus is cool",
    },
    {
      title: "React",
      thought: "React gives me power",
    },
    {
      title: "Beatrice",
      thought:
        "My friend Beatrice has mad skills. She made the top10!. I'm just so proud of her.",
    },
  ]);

  return (
    <div className="SocialPosts">
      <button className="new-item">New Thought</button>

      <div className="posts">
        {posts.map((post) => (
          <PostInList key={post.title} post={post} />
        ))}
      </div>
    </div>
  );
};

export default SocialPosts;
