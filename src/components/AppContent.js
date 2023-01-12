import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
  return (
    <div>
      {sortedTodoList && sortedTodoList.length > 0 ? (
        <ul>
          {sortedTodoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <h4 className="text-center text-3xl mt-4">No todo Found</h4>
      )}
    </div>
  );
}

export default AppContent;
