// add imports
import React from "react";
import { useGetTodosQuery } from "../api/apiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");

  const { data: todos, error, isLoading } = useGetTodosQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    //addTodo
    setNewTodo("");
  };

  const newItemSection = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Enter a new todo item</label>
      <div className="new-todo">
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
        />
      </div>
      <button className="submit">
        <FontAwesomeIcon icon={faUpload} />
      </button>
    </form>
  );

  let content;
  // Define conditional content
  if (isLoading) {
    <p>Loading....</p>;
  }
  if (error) {
    console.log(error);
    content = <p>{error}</p>;
  }

  content = JSON.stringify(todos);

  return (
    <main>
      <h1>Todo List</h1>
      {newItemSection}
      {content}
    </main>
  );
};
export default TodoList;
