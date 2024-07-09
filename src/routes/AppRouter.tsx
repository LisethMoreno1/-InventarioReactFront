import InboxIcon from '@mui/icons-material/MoveToInbox';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import React from "react";
import LoginPage from "../pages/LoginPage";
import TypeOfIdentificationPage from "../pages/mantenimiento/typeOfIdentification";
import RegistrePage from "../pages/registre";
import { RouteType } from "./route";
import UserList from '../components/users/list/UserList';

const AppRouter: RouteType[] = [
  {
    path: "/",
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/registre",
    sidebarProps: {
      displayText: "Usuario",
      icon: <PersonOutlineIcon />
    },
    children: [
      {
        path: "Registro de Usuario",
        element: <RegistrePage />,
        sidebarProps: {
          displayText: "Registro de Usuario",
          icon: <InboxIcon />
        }
      }, {
        path: "Lista de Usuario",
        element: <UserList />,
        sidebarProps: {
          displayText: "Lista de Usuario",
          icon: <InboxIcon />
        }
      }
    ],

  },
  {
    path: "/Mantenimiento",
    sidebarProps: {
      displayText: "Parametros",
      icon: <PersonOutlineIcon />
    },
    children: [
      {
        path: "Tipo de Identificacion",
        element: <TypeOfIdentificationPage />,
        sidebarProps: {
          displayText: "Tipo de Identificacion",
          icon: <InboxIcon />
        }
      }
    ],
  }
];

export default AppRouter;
