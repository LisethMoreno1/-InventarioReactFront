import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Container, Grid, Tooltip, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { GridColDef } from '@mui/x-data-grid';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { GenreInter } from '../../../interfaces/typeOfGenders/typeOfGenders';
import { deleteTypeOfGenders, getTypeOfGenders, postTypeOfGenders } from '../../../services/api/GenreService/genreService';
import useTypeOfGenderStore from '../../../stores/TypeOfGenderStore';
import { typeOfGendersSchema } from '../../../types/Mantenimiento/typeOfGenders/typeOfGenders';
import { showErrorAlert, showSuccessAlert } from '../../../Utils/alert';
import DataGridComponent from '../../componentesGenerales/Tabla/tabla.components';

const TypeOfGender: React.FC = () => {
    const { genreInter, setGenreInter } = useTypeOfGenderStore((state) => ({
        genreInter: state.genreInter,
        setGenreInter: state.setGenreInter,
    }));
    const formik = useFormik({
        initialValues: {
            genre: '',
        },
        validationSchema: typeOfGendersSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const typeOfGendersRequest: GenreInter = {
                    id: 0,
                    genre: values.genre,
                };

                const response = await postTypeOfGenders(typeOfGendersRequest);
                if (!response.ok)
                    showSuccessAlert('Tipo de género registrado exitosamente');
                resetForm();

            } catch (error) {
                showErrorAlert('Ya hiciste un tipo de género con ese nombre');
            }
        },
    });

    useEffect(() => {
        const fetchTypeOfGender = async () => {
            try {
                const typeOfGenderData = await getTypeOfGenders();
                setGenreInter(typeOfGenderData);
            } catch (error) {
                console.error('Error al obtener tipos de identificación:', error);
            }
        };
        fetchTypeOfGender();
    }, [setGenreInter]);


    const columns: GridColDef<GenreInter>[] = [
        { field: 'genre', headerName: 'genre', width: 350 },
        {
            field: 'Acciones',
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

    const handleEditClick = (TypeOfGender: GenreInter) => {
        alert(`Editar tipo de genreInter: ${TypeOfGender.genre}`);
    };

    const handleDeleteClick = async (TypeOfGender: GenreInter) => {
        try {
            await deleteTypeOfGenders(TypeOfGender);
            const updatedTypeOfGenders = await getTypeOfGenders();
            showSuccessAlert(`Tipo genero ${TypeOfGender.genre} eliminado exitosamente`);
            setGenreInter(updatedTypeOfGenders);
        } catch (error) {
            console.error('Hubo un problema al eliminar el tipo de género:', error);
            showErrorAlert(`Hubo un problema al eliminar el tipo de género ${TypeOfGender.genre}`);
        }
    }



    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    backgroundColor: 'white',
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 5,
                    width: '100%',
                }}
            >
                <Typography variant="h4" component="h2" gutterBottom>
                 Creación de Generos
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                fullWidth
                                value={formik.values.genre}
                                onChange={formik.handleChange}
                                margin="normal"
                                id="genre"
                                name="genre"
                                label="Nombre del Género"
                                error={formik.touched.genre && Boolean(formik.errors.genre)}
                                helperText={formik.touched.genre && formik.errors.genre}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Button color="primary" variant="contained" fullWidth type="submit" sx={{ marginTop: 2 }}>
                                Registrar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>

            <Box mt={5}>
          
                <DataGridComponent  rows={genreInter} columns={columns} >
                    Lista de Generos
                </DataGridComponent>
            </Box>
        </Container>
    );
};

export default TypeOfGender;
