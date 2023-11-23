import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./views/Dashboard";
import Categories from "./views/Categories";

export default function App() {
  return (
    <>
      <DashboardLayout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
         </Routes>
      </DashboardLayout>
    </>
  );
}
