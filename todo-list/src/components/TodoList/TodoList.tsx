import React, { ChangeEvent, useState } from "react";
import Todo from "../../models/Todo";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = () => {
  const [list, setList] = useState<Todo[]>([
    {
      id: 1,
      task: "fold clothes",
      completed: false,
    },
    {
      id: 2,
      task: "put clothes in dresser",
      completed: true,
    },
    {
      id: 3,
      task: "relax",
      completed: false,
    },
  ]);

  const [filterText, setFilterText] = useState("");

  const onDelete = (index: number): void => {
    setList((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const markComplete = (item: Todo): void => {
    setList((prev) =>
      prev.map((todo) => {
        if (todo.task === item.task) {
          todo.completed = true;
        }
        return todo;
      })
    );
  };

  const saveTodoItem = (todo: Todo): void => {
    if (editableTodoItem.task) {
      setList((prev) => [
        ...prev.map((item) => {
          if (item.id === todo.id) {
            item.task = todo.task;
          }
          return item;
        }),
      ]);
      resetEditableTodo();
    } else {
      todo.id = list.length + 1;
      setList((prev) => [...prev, todo]);
    }
  };

  const [editableTodoItem, setEditableTodoItem] = useState<Todo>({
    id: 0,
    task: "",
    completed: false,
  });

  const setEditTodo = (todo: Todo): void => {
    setEditableTodoItem(todo);
  };

  const resetEditableTodo = (): void => {
    setEditableTodoItem({ id: 0, task: "", completed: false });
  };

  const [filteredList, setFilteredList] = useState<Todo[]>(list);

  const filterItems = (e: ChangeEvent<HTMLInputElement>): void => {
    setFilterText(e.target.value);
    // if (e.target.value) {
    //   const listItems = list.filter((item) =>
    //     e.target.value ? item.task.includes(e.target.value) : true
    //   );
    //   setFilteredList(listItems);
    // } else {
    //   setFilteredList(list);
    // }
  };

  return (
    <div className="TodoList">
      <input
        type="text"
        id="filter"
        name="filter"
        className="filter-text"
        value={filterText}
        placeholder="Filter your to-dos"
        onChange={(e) => filterItems(e)}
      />
      {list.length > 0 && list.some((item) => !item.completed) ? (
        <ul>
          {list
            .filter((item) =>
              filterText ? item.task.includes(filterText) : true
            )
            .map((todo, index) => (
              <li key={todo.id}>
                <TodoItem
                  todo={todo}
                  onDelete={() => onDelete(index)}
                  markAsComplete={() => markComplete(todo)}
                  onEdit={() => setEditTodo(todo)}
                />
              </li>
            ))}
        </ul>
      ) : (
        <p>Congratulations you have no todo items.</p>
      )}

      {/* {filterText &&
        (filteredList.length > 0 ? (
          <ul>
            {filteredList.map((todo, index) => (
              <li key={todo.id}>
                <TodoItem
                  todo={todo}
                  onDelete={() => onDelete(index)}
                  markAsComplete={() => markComplete(todo)}
                  onEdit={() => setEditTodo(todo)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>No matching todos</p>
        ))} */}

      <TodoForm
        saveTodo={saveTodoItem}
        editableItem={editableTodoItem}
        cancelEdit={resetEditableTodo}
      />
    </div>
  );
};

export default TodoList;
