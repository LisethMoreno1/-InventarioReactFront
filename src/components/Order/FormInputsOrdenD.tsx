
import React from 'react';
import { Grid, TextField } from '@mui/material';

const FormInputsOrden: React.FC = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
                <TextField
                    fullWidth
                    margin="normal"
                    id="brand"
                    name="brand"
                    label="Marca"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="yearOfManufacture"
                    name="yearOfManufacture"
                    label="Año de fabricación"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="plateNumber"
                    name="plateNumber"
                    label="Número de placa"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                />

            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <TextField
                    fullWidth
                    margin="normal"
                    id="categories"
                    name="categories"
                    label="Categorías"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="subcategories"
                    name="subcategories"
                    label="Subcategoría"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="orderStatusId"
                    name="orderStatusId"
                    label="Estado del pedido"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                />

            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <TextField
                    fullWidth
                    margin="normal"
                    id="descriptionOfProblem"
                    name="descriptionOfProblem"
                    label="Descripción del problema"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                />

                <TextField
                    fullWidth
                    margin="normal"
                    id="dateOfEntry"
                    name="dateOfEntry"
                    label="Fecha de entrada"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>

        </Grid>
    );
};

export default FormInputsOrden;
