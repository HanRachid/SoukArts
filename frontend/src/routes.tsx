import { RouteObj } from "../types";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Privacy from "./pages/Privacy";
import Register from "./pages/Register";
import Termsofuse from "./pages/TermsOfUse";
import GlobalLayout from "./layouts/GlobalLayout";
import ProfileLayout from "./layouts/ProfileLayout";
import ProductDetail from "./pages/ProductDetail";
import SearchResult from "./pages/SearchResults";
import ProductsList from "./pages/ProductsList";
import Logout from "./pages/Logout";
import Payment from "./pages/Payment";
import DeliveryPayment from "./pages/DeliveryPayment";
import ReviewPayment from "./pages/ReviewPayment";
import PaymentLayout from "./layouts/PaymentLayout";
import Favorite from "./pages/Favorite";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./views/sellerdashboard/Dashboard";
import Products from "./views/sellerdashboard/Products";
import AddNewProduct from "./components/products/AddNewProduct";
import SellerLinks from "./dashboardlinks/SellerLinks";
import OrdersDetails from "./components/orders/OrdersDetails";
import Cart from "./pages/Cart";
import Becomeaseller from "./layouts/BecomeASeller";
import Welcomepage from "./views/becomeaseller/Welcomepage";
import Shop from "./views/becomeaseller/Shop";
import Sellerpayment from "./views/becomeaseller/Sellerpayment";
import StoreSeller from "./pages/StoreSeller";
import Pending from "./views/becomeaseller/Pending";
import Orders from "./views/sellerdashboard/Orders";
import Settings from "./views/sellerdashboard/Settings";
import Stats from "./views/sellerdashboard/Stats";
import Helps from "./views/sellerdashboard/Helps";
import Finance from "./views/sellerdashboard/Finance";
import Listings from "./components/dashboard/Listings";
import LoginAdmin from "./views/admin/SellerStatus";
import AdminLayout from "./layouts/AdminLayout";
import AdminLinks from "./dashboardlinks/AdminLinks";
import Profile from "./views/profile/Profile";
import ProfileLinks from "./dashboardlinks/ProfileLinks";
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
    path: "/termsofuse",
    element: <GlobalLayout Component={Termsofuse} hasLayout={false} />,
  },
  {
    path: "/privacy",
    element: <GlobalLayout Component={Privacy} hasLayout={false} />,
  },
  {
    path: "/categories/:category",
    element: <GlobalLayout Component={ProductsList} hasLayout={true} />,
  },
  {
    path: "/cart",
    element: <GlobalLayout Component={Cart} hasLayout={true} />,
  },
  {
    path: "/deliverypayment",
    element: <PaymentLayout Component={DeliveryPayment} activeStep={0} />,
  },
  {
    path: "/payment",
    element: <PaymentLayout Component={Payment} activeStep={1} />,
  },
  {
    path: "/reviewpayment",
    element: <PaymentLayout Component={ReviewPayment} activeStep={2} />,
  },
  {
    path: "/becomeaseller",
    element: <Becomeaseller Component={Welcomepage} activeStep={0} />,
  },
  {
    path: "/shop",
    element: <Becomeaseller Component={Shop} activeStep={1} />,
  },

  {
    path: "/sellerpayment",
    element: <Becomeaseller Component={Sellerpayment} activeStep={2} />,
  },
  {
    path: "/pending",
    element: <GlobalLayout Component={Pending} hasLayout={true} />,
  },
  {
    path: "/products/:product",
    element: <GlobalLayout Component={ProductDetail} hasLayout={true} />,
  },
  {
    path: "/logout",
    element: <GlobalLayout Component={Logout} hasLayout={true} />,
  },
  {
    path: "/search/:category/:terms",
    element: <GlobalLayout Component={SearchResult} hasLayout={true} />,
  },
  {
    path: "/:style",
    element: <GlobalLayout Component={ProductByStyle} hasLayout={true} />,
  },
  {
    path: "/favorite",
    element: <GlobalLayout Component={Favorite} hasLayout={true} />,
  },
  {
    path: "/Cart",
    element: <GlobalLayout Component={Cart} hasLayout={true} />,
  },

  {
    path: "/Admin",
    element: (
      <AdminLayout
        pageTitle={"Home Admin"}
        Component={LoginAdmin}
        links={AdminLinks}
      />
    ),
  },
  {
    path: "/dashboard",
    element: (
      <DashboardLayout
        pageTitle={"Dashboard"}
        Component={Dashboard}
        links={SellerLinks}
      />
    ),
  },
  {
    path: "/Dashboard/Products",
    element: (
      <DashboardLayout
        pageTitle={"Dashboard/Products"}
        Component={Products}
        links={SellerLinks}
      />
    ),
  },
  {
    path: "/Dashboard/Orders",
    element: (
      <DashboardLayout
        pageTitle={"/Dashboard/Orders"}
        Component={Orders}
        links={SellerLinks}
      />
    ),
  },
  {
    path: "/Dashboard/Stats",
    element: (
      <DashboardLayout
        pageTitle={"/Dashboard/Stats"}
        Component={Stats}
        links={SellerLinks}
      />
    ),
  },
  {
    path: "/Dashboard/Finance",
    element: (
      <DashboardLayout
        pageTitle={"/Dashboard/Finance"}
        Component={Finance}
        links={SellerLinks}
      />
    ),
  },
  {
    path: "/Dashboard/Settings",
    element: (
      <DashboardLayout
        pageTitle={"/Dashboard/Settings"}
        Component={Settings}
        links={SellerLinks}
      />
    ),
  },
  // {
  //   path: '/Dashboard/Marketing',
  //   element: (
  //     <DashboardLayout
  //       pageTitle={'/Dashboard/Marketing'}
  //       Component={Products}
  //       links={SellerLinks}
  //     />
  //   ),
  // },
  {
    path: "/Dashboard/Help",
    element: (
      <DashboardLayout
        pageTitle={"/Dashboard/Help"}
        Component={Helps}
        links={SellerLinks}
      />
    ),
  },
  {
    path: "Dashboard/products/addNewProduct",
    element: (
      <DashboardLayout
        pageTitle={"Dashboard/Products"}
        Component={AddNewProduct}
        links={SellerLinks}
      />
    ),
  },
  {
    path: "Dashboard/Stats",
    element: (
      <DashboardLayout
        pageTitle={"Dashboard"}
        Component={Stats}
        links={SellerLinks}
      />
    ),
  },
  {
    path: "Profile/",
    element: (
      <ProfileLayout
        pageTitle={"Profile"}
        Component={Profile}
        links={ProfileLinks}
      />
    ),
  },
  {
    path: "Dashboard/orders/ordersDetails",
    element: (
      <DashboardLayout
        pageTitle={"Dashboard/Orders"}
        Component={OrdersDetails}
        links={SellerLinks}
      />
    ),
  },
  {
    path: "/Store",
    element: <GlobalLayout Component={StoreSeller} hasLayout={true} />,
  },
] as RouteObj[];
