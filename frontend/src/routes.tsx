import { RouteObj } from "../types";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Privacy from "./pages/Privacy";
import Register from "./pages/Register";
import Termsofuse from "./pages/TermsOfUse";
import GlobalLayout from "./layouts/GlobalLayout";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import DashboardLayout from "./layouts/DashboardLayout";
export default [
  {
    path: "/",
    element: <GlobalLayout Component={Home} hasLayout={true} />,
  },
  {
    path: "/login",
    element: <GlobalLayout Component={Login} hasLayout={false} />,
  },
  {
    path: "/register",
    element: <GlobalLayout Component={Register} hasLayout={false} />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout Component={Dashboard} />,
  },
  {
    path: "/categories",
    element: <DashboardLayout Component={Categories} />,
  },
  {
    path: "/termsofuse",
    element: <GlobalLayout Component={Termsofuse} hasLayout={false} />,
  },
  {
    path: "/privacy",
    element: <GlobalLayout Component={Privacy} hasLayout={false} />,
  },
] as RouteObj[];
