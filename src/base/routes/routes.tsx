import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { TaskProvider } from "../../context/formNewTask.jsx";
import React from "react";
import Layout from "../layout/layout.jsx";
import PagesView from "../../ui/views/pages.jsx";

const AppRoutes: React.FC = () => {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<PagesView />} />
          </Route>
        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default AppRoutes;
