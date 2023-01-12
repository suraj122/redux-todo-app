import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { delteTodo } from "../slices/TodoSlice";
import TodModal from "./TodModal";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const handleDelete = (id) => {
    dispatch(delteTodo(id));
    toast.success("Task Delted Successfully");
  };

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  return (
    <>
      <li className="flex items-center justify-between bg-gray-300 py-4 px-4 mt-6 rounded-md">
        <div className="flex items-center">
          <input type="checkbox" />
          <h3 className="ml-3">{todo.title}</h3>
        </div>

        <div className="flex items-center">
          <MdDelete
            onClick={() => handleDelete(todo.id)}
            className="mr-3 cursor-pointer"
          />
          <MdModeEditOutline
            onClick={handleUpdate}
            className="cursor-pointer"
          />
        </div>
      </li>
      {updateModalOpen && (
        <TodModal
          type="update"
          todo={todo}
          modalOpen={updateModalOpen}
          setModalOpen={setUpdateModalOpen}
        />
      )}
    </>
  );
}

export default TodoItem;
