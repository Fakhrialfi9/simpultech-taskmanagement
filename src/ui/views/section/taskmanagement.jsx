import { useState } from "react";
import { ChevronDown, Ellipsis, Clock, Pencil, Trash2 } from "lucide-react";
import { taskManagementData } from "../../../data/taskmanagementData.js";
import pagesStyle from "../../../assets/style/views/pages.module.css";

const TaskManagements = () => {
  const [activeToggles, setActiveToggles] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const [selectMenu, setSelectMenu] = useState({});

  const handleMiniMizeToggle = (index) => {
    setActiveToggles((prevToggles) => ({
      ...prevToggles,
      [index]: !prevToggles[index],
    }));
  };

  const handleCheckboxChange = (index) => {
    setCheckedItems((prevItems) => ({
      ...prevItems,
      [index]: !prevItems[index],
    }));

    if (!activeToggles[index]) {
      setActiveToggles((prevToggles) => ({
        ...prevToggles,
        [index]: !prevToggles[index],
      }));
    }
  };

  const handleSelectMenu = (index) => {
    setSelectMenu((prevItems) => ({
      ...prevItems,
      [index]: !prevItems[index],
    }));
  };

  const menuItems = [
    { label: "Delete Task", icon: <Trash2 size={15} />, action: "delete" },
    { label: "Edit Task", icon: <Pencil size={15} />, action: "edit" },
  ];

  return (
    <>
      {taskManagementData.map((task, index) => (
        <li key={index}>
          <form action=''>
            <div className={pagesStyle.select}>
              <input type='checkbox' checked={!!checkedItems[index]} onChange={() => handleCheckboxChange(index)} />
            </div>

            <div className={pagesStyle.information}>
              <div className={pagesStyle.header}>
                <div className={pagesStyle.title}>
                  <h5 className={checkedItems[index] ? pagesStyle.strikethrough : ""}>{task.name}</h5>
                </div>
                <div className={pagesStyle.function}>
                  <h6 className={checkedItems[index] ? pagesStyle.hide : ""}>{task.dueDate}</h6>
                  <h6>{task.date}</h6>
                  <span className={`${pagesStyle.ChevronDown} ${activeToggles[index] ? pagesStyle.active : ""}`}>
                    <ChevronDown onClick={() => handleMiniMizeToggle(index)} size={20} />
                  </span>
                  <span>
                    <Ellipsis onClick={() => handleSelectMenu(index)} size={20} />

                    <div className={`${pagesStyle.select} ${selectMenu[index] ? pagesStyle.active : ""}`}>
                      <ul onClick={() => handleSelectMenu(index)}>
                        {menuItems.map((item, index) => (
                          <li key={index}>
                            <a>
                              {item.icon} {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </span>
                </div>
              </div>
              <div className={`${pagesStyle.body} ${activeToggles[index] ? pagesStyle.active : ""}`}>
                <span>
                  <Clock size={20} />
                </span>
                <input type='date' defaultValue={task.date}></input>
              </div>
              <div className={`${pagesStyle.footer} ${activeToggles[index] ? pagesStyle.active : ""}`}>
                <span>
                  <Pencil size={20} />
                </span>
                <p>{task.description || "No Description"}</p>
              </div>
            </div>
          </form>
        </li>
      ))}
    </>
  );
};

export default TaskManagements;
