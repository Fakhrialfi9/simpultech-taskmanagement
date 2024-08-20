import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../../context/formNewTask.jsx";
import Dock from "../components/dock.jsx";
import TaskManagement from "./section/taskmanagement.jsx";
import FormNewTask from "./section/formnewtask.jsx";
import pagesStyle from "../../assets/style/views/pages.module.css";
import Spinner from "../../lib/spinner.jsx";

const Pages = () => {
  const { formNewTask } = useContext(TaskContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main id='home' className={pagesStyle.main}>
      <div className='Container'>
        <div className={pagesStyle.content}>
          <ul>
            {/* Task Management */}
            <TaskManagement />
            {/* Task Management */}

            {/* Form Add New Task */}
            {formNewTask && <FormNewTask />}
            {/* Form Add New Task */}
          </ul>
          <div id='formNewTask'></div>
        </div>
      </div>
      <Dock />
    </main>
  );
};

export default Pages;
