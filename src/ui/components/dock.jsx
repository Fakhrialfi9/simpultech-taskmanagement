import { useState, useEffect, useRef } from "react";
import { Settings2, MessageSquareMore, Sun, Moon } from "lucide-react";
import dockStyle from "../../assets/style/components/dock.module.css";

const Dock = () => {
  const [selectMenu, setselectMenu] = useState(false);
  const selectRef = useRef(null);

  const handleSelectMenu = () => {
    setselectMenu(!selectMenu);
  };

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

  const handleSchemaColor = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.body.classList.toggle("dark", newMode);
    document.body.classList.toggle("light", !newMode);
  };

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const isDark = savedTheme === "dark";
      setIsDarkMode(isDark);
      document.body.classList.toggle("dark", isDark);
      document.body.classList.toggle("light", !isDark);
    }
  }, []);

  return (
    <nav className={dockStyle.dock}>
      <div className={dockStyle.content}>
        <span onClick={handleSelectMenu}>
          <Settings2 size={23} />
        </span>

        <div ref={selectRef} className={`${dockStyle.select} ${selectMenu ? dockStyle.active : ""}`}>
          <ul>
            <li>
              <a href='https://simpultech-inbox.vercel.app/'>
                <MessageSquareMore size={15} /> Go to Inbox Message
              </a>
            </li>
            <li>
              <span onClick={handleSchemaColor}>
                {isDarkMode ? (
                  <>
                    <Moon size={15} /> Dark Mode
                  </>
                ) : (
                  <>
                    <Sun size={15} /> Light Mode
                  </>
                )}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Dock;
