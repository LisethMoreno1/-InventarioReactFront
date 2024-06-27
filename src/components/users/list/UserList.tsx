import React, { useEffect, useState } from 'react';
import useStore from '../../../stores/store';
import { getUsers } from '../../../services/api/userService/userService';
import { GridColDef } from '@mui/x-data-grid';
import { Box, Button, Tooltip } from '@mui/material';
import { User } from '../../../interfaces/Users/User';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import DataGridComponent from '../../componentesGenerales/Tabla/tabla.components';



const UserList: React.FC = () => {
  const { users, setUsers } = useStore((state) => ({
    users: state.users,
    setUsers: state.setUsers,
  }));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        const transformedUsers = data.map(user => ({
          ...user,
        }));
        setUsers(transformedUsers);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [setUsers]);

  if (loading) {
    return <div>Loading...</div>;
  }
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'typeOfIdentification', headerName: 'Type of Identification', width: 200,
      renderCell: ({ row }) => row?.typeOfIdentification?.name

    },
    { field: 'identificationNumber', headerName: 'Identification Number', width: 200 },
    { field: 'fullName', headerName: 'Full Name', width: 380, valueGetter: (value, row) => `${row.firstName || ""} ${row.middleName || ""} ${row.firstLastName || ""} ${row.secondLastName || ""}` },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 150 },
    { field: 'email', headerName: 'Email', width: 300 },
    {
      field: 'role', headerName: 'Role', width: 150, renderCell: ({ row }) => row?.role?.typeOfRole,
    },
    {
      field: 'Genre', headerName: 'Genre', width: 150, renderCell: ({ row }) => row?.genre?.genre,
    },
    {
      field: 'Acciones',
      headerName: 'Acciones',
      width: 250,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
       <Tooltip title="Editar">
            <Button
              color="primary"
              size="small"
              startIcon={<EditIcon />}
              onClick={() => handleEditClick(params.row)}
              sx={{
                border: 'none',
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: 'none',
                },
              }}
            >

            </Button>
          </Tooltip>
          <Tooltip title="Ver">
            <Button
              color="success"
              size="small"
              startIcon={<VisibilityIcon />}
              onClick={() => handleViewClick(params.row)}
              sx={{
                border: 'none',
                boxShadow: 'none', 
                '&:hover': {
                  boxShadow: 'none', 
                },
              }}
            >
              
            </Button>
          </Tooltip>
          <Tooltip title="Eliminar">
            <Button
            
              color="error"
              size="small"
              startIcon={<DeleteIcon />}
              onClick={() => handleDeleteClick(params.row)}
              sx={{
                border: 'none',
                boxShadow: 'none', 
                '&:hover': {
                  boxShadow: 'none', 
                },
              }}
            >
              
            </Button>
          </Tooltip>
        </Box>
      ),
    },
  ];


  // Funciones para manejar los clics en los botones
  const handleEditClick = (user: User) => {
    alert(`Editar usuario: ${user.firstName} ${user.firstLastName}`);
  };

  const handleViewClick = (user: User) => {
    alert(`Ver detalles de: ${user.firstName} ${user.firstLastName}`);
  };

  const handleDeleteClick = (user: User) => {
    alert(`Borrar usuario: ${user.firstName} ${user.firstLastName}`);
  };

  return (
    <div>
      <h1>Lista de usuarios</h1>
      <DataGridComponent rows={users} columns={columns} />
    </div>
  );
};

export default UserList;
