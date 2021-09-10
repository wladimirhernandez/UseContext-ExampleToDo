export default function addReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "UPDATE_TASK":
      const updatedTask = action.payload;

      const updatedTasks = state.tasks.map((task) => {
        if (task.id === updatedTask.id) {
          task.title = updatedTask.title;
          task.description = updatedTask.description;
          return task;
        }

        return task;
      });
      return {
        tasks: updatedTasks,
      };

    case "TOGGLE_TASK_DONE":
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, done: !task.done } : task
        ),
      };
    case "DELETE_ALL":
      return {
        tasks: [],
      };

    default:
      return state;
  }
}
