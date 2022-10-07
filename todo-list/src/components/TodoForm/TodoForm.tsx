import { FormEvent, useState } from "react";
import Todo from "../../models/Todo";
import "./TodoForm.css";

interface Props {
  editableItem: Todo;
  saveTodo: (todo: Todo) => void;
  cancelEdit: () => void;
}

const TodoForm = ({ saveTodo, editableItem, cancelEdit }: Props) => {
  const [task, setTask] = useState("");

  const submit = (e: FormEvent): void => {
    e.preventDefault();
    if (editableItem.task) {
      saveTodo({
        id: editableItem.id,
        task: task,
        completed: editableItem.completed,
      });
    } else {
      saveTodo({
        id: 0,
        task,
        completed: false,
      });
    }
    setTask("");
  };

  return (
    <form className="TodoForm" onSubmit={(e) => submit(e)}>
      <label htmlFor="task">
        {editableItem.task ? "Update the task" : "Enter a new task:"}
      </label>
      <input
        type="text"
        name="task"
        id="task"
        placeholder="Add your to-do"
        value={task || editableItem.task}
        required
        onChange={(e) => setTask(e.target.value)}
      />

      {editableItem.task ? (
        <>
          <button>Update</button>
          <button type="reset" onClick={cancelEdit}>
            Cancel
          </button>
        </>
      ) : (
        <button>Add</button>
      )}
    </form>
  );
};

export default TodoForm;
