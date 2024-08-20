import React, { useEffect } from "react";
import Routes from "../routes/routes.tsx";

const App: React.FC = () => {
  // useEffect(() => {
  //   const now = new Date();
  //   const hours = now.getHours();
  //   const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  //   if (hours >= 6 && hours < 18) {
  //     // Daytime (6 AM to 6 PM)
  //     document.body.classList.add("light");
  //     document.body.classList.remove("dark");
  //   } else {
  //     // Nighttime (6 PM to 6 AM)
  //     document.body.classList.add("dark");
  //     document.body.classList.remove("light");
  //   }

  //   // Optional: Save theme preference in localStorage
  //   localStorage.setItem("theme", hours >= 6 && hours < 18 ? "light" : "dark");
  // }, []);

  return <Routes />;
};

export default App;
