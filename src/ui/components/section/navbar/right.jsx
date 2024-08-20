import { useContext, useState } from "react";
import { Plus, X } from "lucide-react"; // Import ikon X untuk "Cancel"
import { Link } from "react-scroll";
import { TaskContext } from "../../../../context/formNewTask.jsx";
import navbarStyle from "../../../../assets/style/components/navbar.module.css";

const Right = () => {
  const { handleformNewTask } = useContext(TaskContext);
  const [isTaskFormActive, setIsTaskFormActive] = useState(false);

  const handleClick = () => {
    handleformNewTask();
    setIsTaskFormActive(!isTaskFormActive); // Toggle state ketika tombol diklik
  };

  return (
    <section className={navbarStyle.right}>
      <div className={navbarStyle.contentright}>
        {isTaskFormActive ? (
          <Link to='home' smooth={true} duration={100} spy={true} exact='true' offset={-150}>
            <button onClick={handleClick} className={navbarStyle.cancelButton}>
              Cancel <X size={15} />
            </button>
          </Link>
        ) : (
          <Link to='formNewTask' smooth={true} duration={100} spy={true} exact='true' offset={0}>
            <button onClick={handleClick} className={navbarStyle.newTaskButton}>
              New Task <Plus size={15} />
            </button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Right;
