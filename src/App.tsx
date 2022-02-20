import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/mainPage";
import { DashboardProvider } from "./store/dashboardContext";

function App() {
  return (
    <>
      <Router>
        <Header />
        <DashboardProvider>
          <Routes>
            <Route path="*" element={<Navigate replace to="home" />} />
            <Route path="/home" element={<MainPage />} />
          </Routes>
        </DashboardProvider>
      </Router>
    </>
  );
}

export default App;
