import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { DashboardProvider } from "./store/dashboardContext";
import { Products } from "./ts/enums/product-enums";

function App() {
  return (
    <>
      <Router>
        <Header />
        <DashboardProvider>
          <Routes>
            <Route path="*" element={<Navigate replace to="home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route
              path="/books-and-magazines"
              element={<ProductPage productName={Products.BooksAndMagazines} />}
            />
            <Route
              path="/clothing-and-accessories"
              element={<ProductPage productName={Products.ClothingAndAccessories} />}
            />
            <Route
              path="/electronics-and-appliances"
              element={<ProductPage productName={Products.ElectronicsAndAppliances} />}
            />
            <Route
              path="/sporting-goods"
              element={<ProductPage productName={Products.SportingGoods} />}
            />
          </Routes>
        </DashboardProvider>
      </Router>
    </>
  );
}

export default App;
