import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import AdminPanelPage from "./AdminPanelPage";
import AddHotelsPage from "./AddHotelsPage";

const MainRoutes = () => {
  return (
      <Routes>
        <Route  path="/" element={<LoginPage />} ></Route>
        {/* <Route  path="/login" element={<LoginPage />} ></Route> */}
        <Route  path="/admin" element={<AdminPanelPage />} ></Route>
        <Route  path="/addHotel" element={<AddHotelsPage />}></Route>
      </Routes>
  );
};
export default MainRoutes;
