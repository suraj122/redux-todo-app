import React, { useState } from "react";
import TodModal from "./TodModal";

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-cyan-700 text-white px-3 py-2 rounded-md"
        >
          Add Task
        </button>
        <select className=" bg-gray-400 rounded-md px-3 py-2" name="" id="">
          <option value="All">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      {modalOpen && (
        <TodModal
          type="add"
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
}

export default AppHeader;
