import Todo from "../../models/Todo";
import "./TodoItem.css";

interface Props {
  todo: Todo;
  onDelete: () => void;
  markAsComplete: () => void;
  onEdit: () => void;
}

const TodoItem = ({ todo, onDelete, markAsComplete, onEdit }: Props) => {
  return (
    <p className="TodoItem">
      {!todo.completed && (
        <button className="complete" onClick={markAsComplete}>
          Complete
        </button>
      )}
      <span className={todo.completed ? "completed" : ""}>{todo.task}</span>
      <button onClick={onDelete} className="delete">
        <i className="material-icons">cancel</i>
      </button>
      <button className="edit" onClick={onEdit}>
        <span className="material-icons">edit_square</span>
      </button>
    </p>
  );
};

export default TodoItem;
