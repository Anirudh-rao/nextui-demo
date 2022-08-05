// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Product = lazy(() => import("./components/Product"));
const Cart = lazy(() => import("./components/Cart"));

function App() {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <Navbar />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Product />}>
              Product
            </Route>
            <Route path="/cart" element={<Cart />}>
              Cart
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </NextUIProvider>
  );
}
export default App;