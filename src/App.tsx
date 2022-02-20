import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import BooksPage from "./pages/BooksPage";
import HomePage from "./pages/HomePage";
import { DashboardProvider } from "./store/dashboardContext";

function App() {
  return (
    <>
      <Router>
        <Header />
        <DashboardProvider>
          <Routes>
            <Route path="*" element={<Navigate replace to="home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/books-and-magazines" element={<BooksPage />} />
          </Routes>
        </DashboardProvider>
      </Router>
    </>
  );
}

export default App;
