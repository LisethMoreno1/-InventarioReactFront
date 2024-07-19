import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FieldArray, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { customersSchema } from "../../types/Customers/customers";
import { getCustomers } from "../../services/api/Customers/customersService";

const RealizarOrden: React.FC<{ customerId: string }> = ({ customerId }) => {
    const [customer, setCustomer] = useState<any>(null);
    const [initialOrders, setInitialOrders] = useState([{ price: '', orderDate: '' }]);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const customerData = await getCustomers();
                setCustomer(customerData);
            } catch (error) {
                console.error('Error al obtener los clientes:', error);
            }
        };
        fetchCustomers();
    }, [customerId]);

    const initialValues = {
        name: customer?.name || '',
        phone: customer?.phone || '',
        email: customer?.email || '',
        address: customer?.address || '',
        orders: initialOrders
    };

    return (
        <Box
            sx={{
                backgroundColor: 'white',
                padding: 4,
                borderRadius: 2,
                boxShadow: 5,
                width: '100%',
                mt: 3,
            }}
        >
            <Typography variant="h4" component="h2" gutterBottom>
                Realizar Orden
            </Typography>

            <Formik
                initialValues={initialValues}
                validationSchema={customersSchema}
                onSubmit={(values) => {
                    console.log(values);
                    // Aquí iría tu lógica para enviar los datos de la orden
                }}
            >
                {({ values, handleChange, handleBlur, touched, errors }) => (
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    id="name"
                                    name="name"
                                    label="Nombre"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.name && errors.name ? errors.name.toString() : ''}
                                    error={Boolean(touched.name && errors.name)}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    id="phone"
                                    name="phone"
                                    label="Teléfono"
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.phone && errors.phone ? errors.phone.toString() : ''}
                                    error={Boolean(touched.phone && errors.phone)}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    id="email"
                                    name="email"
                                    label="Correo Electrónico"
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.email && errors.email ? errors.email.toString() : ''}
                                    error={Boolean(touched.email && errors.email)}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    id="address"
                                    name="address"
                                    label="Dirección"
                                    value={values.address}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.address && errors.address ? errors.address.toString() : ''}
                                    error={Boolean(touched.address && errors.address)}
                                />
                            </Grid>
                        </Grid>

                        <FieldArray
                            name="orders"
                            render={(arrayHelpers) => (
                                <div>
                                    {values.orders.map((order, index) => (
                                        <Grid container spacing={2} key={index}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    margin="normal"
                                                    name={`orders[${index}].price`}
                                                    label="Valor de la Orden"
                                                    type="number"
                                                    value={order.price}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                              
                                                    error={Boolean(touched.orders?.[index]?.price && errors.orders?.[index]?.price)}
                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    margin="normal"
                                                    name={`orders[${index}].orderDate`}
                                                    label="Fecha de Orden"
                                                    type="date"
                                                    InputLabelProps={{ shrink: true }}
                                                    value={order.orderDate}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                               
                                                    error={Boolean(touched.orders?.[index]?.orderDate && errors.orders?.[index]?.orderDate)}
                                                />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Button
                                                    type="button"
                                                    onClick={() => arrayHelpers.remove(index)}
                                                    color="error"
                                                >
                                                    Eliminar Orden
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    ))}

                                    <Button
                                        type="button"
                                        onClick={() => arrayHelpers.push({ price: '', orderDate: '' })}
                                        color="primary"
                                    >
                                        Agregar Orden
                                    </Button>
                                </div>
                            )}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2 }}
                        >
                            Enviar
                        </Button>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

export { RealizarOrden };
