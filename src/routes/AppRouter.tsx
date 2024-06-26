import LoginPage from "../pages/LoginPage";
import UserList from "../components/users/list/UserList";
import RegistrePage from "../pages/registre";
import { RouteType } from "./route";
import SideBarApp from "../components/Layout/SideBarApp";

const AppRouter: RouteType[] = [
  {
    index: true,
    path: "/login",
    element: <LoginPage />, 
    state: "login", 
    sidebarProps: {
      displayText: "Login", 
      icon: "" 
    }
  },
  {
    path: "/registre",
    element: <RegistrePage />, 
    state: "registre", 
    sidebarProps: {
      displayText: "Registre", 
      icon: "" 
    },
  },
  {
    path: "/lista",
    element: <UserList />, 
    state: "lista", 
    sidebarProps: {
      displayText: "lista", 
      icon: "" 
    },
  },
  {
    path: "/",
    element: <SideBarApp />, 
    state: "lista", 
    sidebarProps: {
      displayText: "lista", 
      icon: "" 
    },
  }
  
];

export default AppRouter;
