import { FormEvent, useState } from "react";
import Post from "../../models/Post";
import "./PostForm.css";

interface Props {
  onSubmitForm: (post: Post) => void;
  onClose: () => void;
}

const PostForm = ({ onSubmitForm, onClose }: Props) => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmitForm({ title, thought });
  };

  return (
    <div className="PostForm">
      <form onSubmit={handleSubmit}>
        <div className="close-wrapper">
          <button type="button" className="close" onClick={onClose}>
            <i className="material-icons">cancel</i>
          </button>
        </div>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          value={title}
          className="title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="thought">Thought</label>
        <textarea
          name="thought"
          id="thought"
          required
          value={thought}
          className="thought"
          onChange={(e) => setThought(e.target.value)}
        ></textarea>

        <button className="addPost">Add Post</button>
      </form>
    </div>
  );
};

export default PostForm;
