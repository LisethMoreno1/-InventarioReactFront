import LoginPage from "../pages/LoginPage";
import UserList from "../components/users/list/UserList";
import RegistrePage from "../pages/registre";
import { RouteType } from "./route";
import PermanentDrawerLeft from "../components/Layout/Sidebar";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Dashboard from "../components/Layout/Dashboard";
const AppRouter: RouteType[] = [

  {
    path: "/prueba",
    element: <PermanentDrawerLeft />,
    state: "",
    sidebarProps: {
      displayText: "",
      icon: ""
    },
  },
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
      icon: <PersonOutlineIcon />
    },
  },
  {
    path: "/lista",
    element: <UserList />,
    state: "lista",
    sidebarProps: {
      displayText: "Lista de Usuarios",
      icon: <InboxIcon />
    },
  }, {
    path: "/",
    element: <Dashboard />,
    state: "",
    sidebarProps: {
      displayText: "",
      icon: ""
    },
  }

];

export default AppRouter;
