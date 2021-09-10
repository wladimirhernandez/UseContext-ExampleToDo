import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

function TaskForm() {
  const history = useHistory();
  const { addTaks, updateTask, tasks } = useContext(GlobalContext);
  const params = useParams();

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      updateTask(task);
    } else {
      addTaks(task);
    }
    history.push("/");
  };

  useEffect(() => {
    const taskFound = tasks.find((task) => task.id === params.id);
    if (params.id) {
      setTask(taskFound);
    } else {
      console.log("creando");
    }
  }, [params.id, tasks]);

  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="bg-gray-900 p-10">
        <h2 className="mb-7 text-3x1">
          {task.id ? "Editing a Task" : "Creating a Task"}
        </h2>
        <div className="mb-5">
          <input
            value={task.title}
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="write a title"
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
          />
        </div>
        <div className="mb-5">
          <textarea
            value={task.description}
            onChange={handleChange}
            type="text"
            name="description"
            placeholder="write a description"
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5"
        >
          {task.id ? "Edit" : "Create"} Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
