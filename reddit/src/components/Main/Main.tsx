import { useEffect, useState } from "react";
import { RedditPost } from "../../models/RedditResponse";
import { getRedditPosts } from "../../services/RedditService";
import PostsList from "../PostsList/PostsList";
import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";

const Main = () => {
  const [posts, setPosts] = useState<RedditPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getRedditPosts(searchTerm).then((response) =>
      setPosts(response.data.children.slice(0, 10))
    );
  }, [searchTerm]);

  return (
    <div className="Main">
      <SearchForm submitForm={setSearchTerm} />
      <PostsList posts={posts} />
    </div>
  );
};

export default Main;
