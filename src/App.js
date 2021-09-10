import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Heading from "./components/Heading";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { ContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <Fragment>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-100">
          <ContextProvider>
            <Heading></Heading>
            <Switch>
              <Route path="/" component={TaskList} exact></Route>
              <Route path="/add" component={TaskForm}></Route>
              <Route path="/edit/:id" component={TaskForm}></Route>
            </Switch>
          </ContextProvider>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
