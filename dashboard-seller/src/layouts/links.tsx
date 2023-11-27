import {
  FaBagShopping,
  FaCartShopping,
  FaShapes,
  FaShop,
} from "react-icons/fa6";
import {
  IoCash,
  IoHelpCircleOutline,
  IoHome,
  IoSettingsSharp,
} from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";

export default [
  {
    icon: <IoHome />,
    linkName: "Dashboard",
  },
  {
    icon: <FaShapes />,
    linkName: "Categories",
  },
  {
    icon: <FaBagShopping />,
    linkName: "Products",
  },
  {
    icon: <FaCartShopping />,
    linkName: "Orders",
  },
  {
    icon: <ImStatsDots />,
    linkName: "Stats",
  },
  {
    icon: <IoCash />,
    linkName: "Finance",
  },
  {
    icon: <IoSettingsSharp />,
    linkName: "Settings",
  },
  {
    icon: <FaShop />,
    linkName: "Marketing",
  },
  {
    icon: <IoHelpCircleOutline />,
    linkName: "Help",
  },
  // other links
];
