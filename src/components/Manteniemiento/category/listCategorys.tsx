import React, { useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button, Tooltip, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import useCategoryStore from '../../../stores/Categorys';
import DataGridComponent from '../../componentesGenerales/Tabla/tabla.components';

const CategoryList: React.FC = () => {
    const { categories, fetchCategoriesAndSubCategories } = useCategoryStore((state) => ({
        categories: state.categories,
        fetchCategoriesAndSubCategories: state.fetchCategoriesAndSubCategories,
    }));

    useEffect(() => {
        fetchCategoriesAndSubCategories();
    }, [fetchCategoriesAndSubCategories]);

    const handleEditClick = (row: any) => {
        // Lógica para editar
        console.log("Edit", row);
    };

    const handleDeleteClick = (row: any) => {
        // Lógica para eliminar
        console.log("Delete", row);
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'categoryName', headerName: 'Categoría', width: 350 },
        { field: 'description', headerName: 'Descripción', width: 350 },
        {
            field: 'actions',
            headerName: 'Acciones',
            width: 150,
            renderCell: (params) => (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: 1 }}>
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
                        />
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
                        />
                    </Tooltip>
                </Box>
            ),
        },
    ];

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
                Lista de Categorías
            </Typography>
            <DataGridComponent rows={categories} columns={columns} />

        </Box>
    );
};

export default CategoryList;
