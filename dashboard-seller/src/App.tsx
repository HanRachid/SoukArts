import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./views/Dashboard";
import Categories from "./views/Categories";
import Products from "./views/Products";
import AddNewProduct from "./components/products/AddNewProduct";

export default function App() {
  return (
    <>
      <DashboardLayout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/addNewProduct" element={<AddNewProduct />} />
         </Routes>
      </DashboardLayout>
    </>
  );
}
