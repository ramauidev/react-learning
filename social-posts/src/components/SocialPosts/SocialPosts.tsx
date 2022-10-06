import { useState } from "react";
import Post from "../../models/Post";
import "./SocialPosts.css";
import PostInList from "../PostInList/PostInList";
import PostForm from "../PostForm/PostForm";

const SocialPosts = () => {
  const [showPostsForm, setShowPostsForm] = useState(false);
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

  const deletePost = (index: number): void => {
    setPosts((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const addPost = (post: Post): void => {
    setPosts((prev) => [post, ...prev]);
    setShowPostsForm(false);
  };

  return (
    <div className="SocialPosts">
      <button className="new-item" onClick={() => setShowPostsForm(true)}>
        New Thought
      </button>
      {showPostsForm && (
        <PostForm
          onSubmitForm={addPost}
          onClose={() => setShowPostsForm(false)}
        />
      )}
      <div className="posts">
        {posts.map((post, index) => (
          <PostInList
            key={post.title}
            post={post}
            onDelete={() => deletePost(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialPosts;
