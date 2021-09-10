import { createContext, useReducer } from "react";
import appReducer from "./AppReducer";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: [
    {
      id: "1",
      title: "title 1",
      description: "some desc",
      done: false,
    },
    {
      id: "2",
      title: "title 2",
      description: "some desc",
      done: true,
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addTaks = (task) => {
    dispatch({
      type: "ADD_TASK",
      payload: { ...task, id: uuidv4(), done: false },
    });
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const updateTask = (task) => {
    dispatch({ type: "UPDATE_TASK", payload: task });
  };

  const toggleTaskDone = (task) => {
    dispatch({ type: "TOGGLE_TASK_DONE", payload: task });
  };

  const deleteAll = () => {
    dispatch({ type: "DELETE_ALL" });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        addTaks,
        updateTask,
        toggleTaskDone,
        deleteTask,
        deleteAll,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
