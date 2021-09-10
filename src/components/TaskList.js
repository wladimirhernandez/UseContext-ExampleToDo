import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import {
  IoIosTrash,
  IoMdCheckmarkCircleOutline,
  IoMdCloseCircle,
} from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

function TaskList() {
  const { tasks, deleteTask, toggleTaskDone, deleteAll } =
    useContext(GlobalContext);
  return (
    <Fragment>
      <button
        onClick={deleteAll}
        className="mb-5 bg-red-400 items-center hover:bg-green-500 text-white font-semibold py-2 px-4 rounder inline-flex"
      >
        <IoIosTrash />
        Delete All
      </button>
      <div className="flex justify-center">
        <div className="w-6/12">
          {tasks.map((task) => (
            <div className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between">
              <div>
                <h1>{task.title}</h1>
                <h6>{task.id}</h6>
                <p>{task.description}</p>
                <button
                  onClick={() => toggleTaskDone(task)}
                  className="bg-purple-600 hover:bg-purple-500 py-2 px-4 mr-2 flex items-center"
                >
                  {task.done ? (
                    <IoMdCloseCircle />
                  ) : (
                    <IoMdCheckmarkCircleOutline />
                  )}{" "}
                  {task.done ? "Undone" : "Done"}
                </button>
              </div>
              <div className="flex">
                <Link
                  to={`/edit/${task.id}`}
                  className="bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2 flex items-center"
                >
                  <AiFillEdit />
                  Edit
                </Link>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2 flex items-center"
                >
                  <IoIosTrash />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default TaskList;
