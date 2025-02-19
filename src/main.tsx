import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Pages/Home/Home";

import "./index.css";
import AllProducts from "./Pages/AllProducts/AllProducts";
import About from "./Pages/About/About";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="all-products" element={<AllProducts />} />
          <Route path="about-us" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
