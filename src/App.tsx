import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/mainPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<Navigate replace to="home" />} />
          <Route path="/home" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
