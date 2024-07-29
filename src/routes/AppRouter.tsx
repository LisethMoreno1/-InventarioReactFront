import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import CategoryIcon from '@mui/icons-material/Category';
import GroupIcon from '@mui/icons-material/Group';
import HistoryIcon from '@mui/icons-material/History';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import PublicIcon from '@mui/icons-material/Public';
import SettingsIcon from '@mui/icons-material/Settings';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import TransgenderIcon from '@mui/icons-material/Transgender';
import React from 'react';
import { ProtectedLayout } from '../components/Layout/ProtectedLayout';
import UserList from '../components/users/ListOfUsers/ListUsers';
import CategoryPages from '../pages/Category/Category';
import SubCategoryPages from '../pages/Category/subCategory';
import CustomersPages from '../pages/Customers/customers';
import CountryPage from '../pages/Mantenimiento/country';
import RolesPage from '../pages/Mantenimiento/roles';
import TypeOfGenderPage from '../pages/Mantenimiento/typeOfGender';
import TypeOfIdentificationPage from '../pages/Mantenimiento/typeOfIdentification';
import ListOrdenPage from '../pages/Orden/ListOrden';
import OrderDetailsPage from '../pages/Orden/OrderDetails';
import RegistrePage from '../pages/Users/registre';

import { RouteType } from './route';
import ListCustomersPages from '../pages/Customers/listCustomers';
import ProductsPage from '../pages/Product/products';
import InventoryIcon from '@mui/icons-material/Inventory';
import ListProducts from '../components/Products/ListProduct';
import ListPurchasePage from '../pages/purchaseOfProduct/ListPurchase';

const AppRouter: RouteType[] = [
  {
    path: "/",
    element: <ProtectedLayout />,
  },
  {
    path: "/registre",
    sidebarProps: {
      displayText: "Usuario",
      icon: <PersonIcon />
    },
    children: [
      {
        path: "Registro de Usuario",
        element: <RegistrePage />,
        sidebarProps: {
          displayText: "Registro de Usuario",
          icon: <AccountBoxIcon />
        }
      },
      {
        path: "Lista de Usuario",
        element: <UserList />,
        sidebarProps: {
          displayText: "Lista de Usuario",
          icon: <ListAltIcon />
        }
      }
    ],
  },
  {
    path: "/coustumer",
    sidebarProps: {
      displayText: "Cliente",
      icon: <GroupIcon />
    },
    children: [
      {
        path: "Registro de Cliente",
        element: <CustomersPages />,
        sidebarProps: {
          displayText: "Registro de Cliente",
          icon: <GroupIcon />
        }
      },
      {
        path: "Lista de Clientes",
        element: <ListCustomersPages />,
        sidebarProps: {
          displayText: "Lista de Clientes",
          icon: <HistoryIcon />
        }
      },
      {
        path: "Detalle de Orden",
        element: <OrderDetailsPage />,
        sidebarProps: {
          displayText: "Detalle de Orden",
          icon: <HistoryIcon />
        }
      },
      {
        path: "Lista de Orden",
        element: <ListOrdenPage />,
        sidebarProps: {
          displayText: "Lista de Orden",
          icon: <HistoryIcon />
        }
      }
    ],
  },
  {
    path: "/Producto",
    sidebarProps: {
      displayText: "Productos",
      icon: <InventoryIcon />
    },
    children: [
      {
        path: "Registro de Producto",
        element: <ProductsPage />,
        sidebarProps: {
          displayText: "Registro de Producto",
          icon: <InventoryIcon />
        }
      },
      {
        path: "Lista de Productos",
        element: <ListProducts />,
        sidebarProps: {
          displayText: "Lista de Productos",
          icon: <InventoryIcon />
        }
      },
      {
        path: "Lista de Compras",
        element: <ListPurchasePage />,
        sidebarProps: {
          displayText: "Lista de Compras",
          icon: <InventoryIcon />
        }
      }
    ],
  },
  {
    path: "/Mantenimiento",
    sidebarProps: {
      displayText: "Parametros",
      icon: <SettingsIcon />
    },
    children: [
      {
        path: "Tipo de Identificacion",
        element: <TypeOfIdentificationPage />,
        sidebarProps: {
          displayText: "Tipo de Identificacion",
          icon: <CardMembershipIcon />
        }
      },
      {
        path: "Tipo de Genero",
        element: <TypeOfGenderPage />,
        sidebarProps: {
          displayText: "Tipo de Genero",
          icon: <TransgenderIcon />
        }
      },
      {
        path: "Roles",
        element: <RolesPage />,
        sidebarProps: {
          displayText: "Creación de roles",
          icon: <SupervisorAccountIcon />
        }
      },
      {
        path: "Cuidad",
        element: <CountryPage />,
        sidebarProps: {
          displayText: "Creación de Cuidad y Departamento",
          icon: <PublicIcon />
        }
      },
      {
        path: "Categoria",
        element: <CategoryPages />,
        sidebarProps: {
          displayText: "Creación de categorias",
          icon: <CategoryIcon />
        }
      },
      {
        path: "Sub - Categoria",
        element: <SubCategoryPages />,
        sidebarProps: {
          displayText: "Sub - Categoria",
          icon: <SubdirectoryArrowRightIcon />
        }
      }
    ],
  }
];

export default AppRouter;
