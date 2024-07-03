import LoginPage from "../pages/LoginPage";
import UserList from "../components/users/list/UserList";
import RegistrePage from "../pages/registre";
import { RouteType } from "./route";
import PermanentDrawerLeft from "../components/Layout/Sidebar";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
/* import Dashboard from "../components/Layout/Dashboard";
 */
const AppRouter: RouteType[] = [
  {
    path: "/",
    element: <PermanentDrawerLeft />,
    state: "prueba",
    /* sidebarProps: {
      displayText: "",
      icon: ""
    } */
  },
  {
    path: "/login",
    element: <LoginPage />,
    state: "",
    /* sidebarProps: {
      displayText: "",
      icon: ""
    } */
  },
  {
    path: "/registre",
    element: "",
    state: "registre",
    sidebarProps: {
      displayText: "Usuario",
      icon: <PersonOutlineIcon />
    },
    children: [
      {
        path: "Registro de Usuario",
        element: <RegistrePage />,
        state: "registro",
        sidebarProps: {
          displayText: "Registro de Usuario",
          icon: <InboxIcon />
        }
      }, {
        path: "Lista de Usuario",
        element: <UserList />,
        state: "lista",
        sidebarProps: {
          displayText: "Lista de Usuario",
          icon: <InboxIcon />
        }
      }
    ],

  }
];

export default AppRouter;
