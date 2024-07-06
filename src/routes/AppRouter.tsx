import LoginPage from "../pages/LoginPage";
import UserList from "../components/users/list/UserList";
import RegistrePage from "../pages/registre";
import { RouteType } from "./route"; import InboxIcon from '@mui/icons-material/MoveToInbox';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TypeOfIdentificationPage from "../pages/mantenimiento/typeOfIdentification";
import SideBar from "../pages/SideBar";


const AppRouter: RouteType[] = [
  {
    path: "/",
    element: <>ghg</>,
  },
  {
    path: "/login",
    element: <LoginPage />,
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

  },
  {
    path: "/Mantenimiento",
    element: "",
    state: "Mantenimiento",
    sidebarProps: {
      displayText: "Parametros",
      icon: <PersonOutlineIcon />
    },
    children: [
      {
        path: "Tipo de Identificacion",
        element: <TypeOfIdentificationPage />,
        state: "Tipo de Identificacion",
        sidebarProps: {
          displayText: "Tipo de Identificacion",
          icon: <InboxIcon />
        }
      }
    ],
  }
];

export default AppRouter;
