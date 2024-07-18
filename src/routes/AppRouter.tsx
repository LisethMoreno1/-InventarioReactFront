import InboxIcon from '@mui/icons-material/MoveToInbox';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import React from "react";
import { ProtectedLayout } from '../components/Layout/ProtectedLayout'; // Asegúrate de que esto esté antes de su uso
import TypeOfIdentificationPage from "../pages/Mantenimiento/typeOfIdentification";
import RegistrePage from '../pages/Users/registre';
import { RouteType } from "./route";
import UserList from '../components/users/ListOfUsers/ListUsers';
import TypeOfGenderPage from '../pages/Mantenimiento/typeOfGender';
import RolesPage from '../pages/Mantenimiento/roles';
import CountryPage from '../pages/Mantenimiento/country';

const AppRouter: RouteType[] = [
  {
    path: "/",
    element: <ProtectedLayout />,
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
      },
      {
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
      },
      {
        path: "Tipo de Genero",
        element: <TypeOfGenderPage />,
        sidebarProps: {
          displayText: "Tipo de Genero",
          icon: <InboxIcon />
        }
      },
      {
        path: "Roles",
        element: <RolesPage />,
        sidebarProps: {
          displayText: "Creación de roles",
          icon: <InboxIcon />
        }
      },
      {
        path: "Cuidad",
        element: <CountryPage />,
        sidebarProps: {
          displayText: "Creación de Cuidad y Departamento",
          icon: <InboxIcon />
        }
      }
    ],
  }
];

export default AppRouter;
