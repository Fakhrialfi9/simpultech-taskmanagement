import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import navbarStyle from "../../../../assets/style/components/navbar.module.css";

const Left = () => {
  const [selectMenu, setselectMenu] = useState(false);
  const selectRef = useRef(null);
  const [selectedTask, setSelectedTask] = useState("My Task");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setselectMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  const handleSelectMenu = () => {
    setselectMenu(!selectMenu);
  };

  const handleSelectTask = (task) => {
    setSelectedTask(task);
    setselectMenu(false);
  };

  return (
    <section className={navbarStyle.left}>
      <div className={navbarStyle.contentleft}>
        <button onClick={handleSelectMenu}>
          {selectedTask} <ChevronDown size={15} />
        </button>

        <div ref={selectRef} className={`${navbarStyle.select} ${selectMenu ? navbarStyle.active : ""}`}>
          <ul>
            <li onClick={() => handleSelectTask("Personal Errands")}>
              <a>Personal Errands</a>
            </li>
            <li onClick={() => handleSelectTask("Urgent To-Do")}>
              <a>Urgent To-Do</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Left;
