import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../slices/TodoSlice";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

function TodModal({ type, modalOpen, setModalOpen, todo }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "update") {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle("");
      setStatus("incomplete");
    }
  }, [type, todo, modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      toast.error("Please enter a title");
      return;
    }
    if (title && status) {
      if (type === "add") {
        dispatch(
          addTodo({
            id: uuidv4(),
            title,
            status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success("Task added successfully");
      }
      if (type === "update") {
        if (todo.title !== title || todo.status !== status) {
          dispatch(
            updateTodo({
              ...todo,
              title,
              status,
            })
          );
        } else {
          toast.error("No Changes found");
        }
      }
      setModalOpen(false);
    } else {
      toast.error("Title can't be empty");
    }
  };

  return (
    <div className="fixed bg-gray-900 bg-opacity-50 w-full h-full left-0 top-0 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white p-8 rounded-md relative"
      >
        <div
          onClick={() => setModalOpen(false)}
          className="bg-red-800 inline-block p-3 text-white cursor-pointer absolute right-0 top-0"
        >
          <AiOutlineClose />
        </div>
        <legend className="text-center text-3xl">
          {type === "update" ? "Update" : "Add"} Task
        </legend>
        <label className="block w-full font-bold" htmlFor="todo">
          Title
          <input
            className="block w-full border border-black px-3 py-1"
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        </label>
        <label className="block w-full font-bold mt-3" htmlFor="status">
          Status
          <select
            className="block w-full border border-black px-3 py-1"
            name="status"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="complete">Complete</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </label>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-cyan-700 text-white px-3 py-2 rounded-md"
          >
            {type === "update" ? "Update" : "Add"} Task
          </button>
          <button
            onClick={() => setModalOpen(false)}
            type="button"
            className="bg-gray-500 text-white px-3 py-2 rounded-md ml-4"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodModal;
