
import React from 'react';
import { Grid, TextField } from '@mui/material';

const FormInputsOrden: React.FC = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    fullWidth
                    margin="normal"
                    id="input1"
                    name="input1"
                    label="Input 1"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="input2"
                    name="input2"
                    label="Input 2"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="input3"
                    name="input3"
                    label="Input 3"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="input4"
                    name="input4"
                    label="Input 4"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    fullWidth
                    margin="normal"
                    id="input5"
                    name="input5"
                    label="Input 5"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="input6"
                    name="input6"
                    label="Input 6"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="input7"
                    name="input7"
                    label="Input 7"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="input8"
                    name="input8"
                    label="Input 8"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    fullWidth
                    margin="normal"
                    id="input9"
                    name="input9"
                    label="Input 9"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="input10"
                    name="input10"
                    label="Input 10"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>
        </Grid>
    );
};

export default FormInputsOrden;
