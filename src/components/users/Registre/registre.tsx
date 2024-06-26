import React from 'react';
import { useFormik } from 'formik';
import { registreSchema } from '../../../types/users/registre/registreSchemas';

const Registre: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            typeOfIdentification: '',
            identificationNumber: '',
            firstName: '',
            middleName: '',
            firstLastName: '',
            secondLastName: '',
            phoneNumber: '',
            email: '',
            typeOfRole: '',
        },
        validationSchema: registreSchema,
        onSubmit: (values) => {
            console.log('Datos del formulario:', values);
        },
    });

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="typeOfIdentification">Tipo de Identificación</label>
                    <select
                        id="typeOfIdentification"
                        name="typeOfIdentification"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.typeOfIdentification}
                    >
                        <option value="">Seleccione...</option>
                        <option value="dni">DNI</option>
                        <option value="passport">Pasaporte</option>
                        <option value="license">Licencia de Conducir</option>
                    </select>
                    {formik.touched.typeOfIdentification && formik.errors.typeOfIdentification ? (
                        <p style={{ color: 'red' }}>{formik.errors.typeOfIdentification}</p>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="identificationNumber">Número de Identificación</label>
                    <input
                        type="text"
                        id="identificationNumber"
                        name="identificationNumber"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.identificationNumber}
                    />
                    {formik.touched.identificationNumber && formik.errors.identificationNumber ? (
                        <p style={{ color: 'red' }}>{formik.errors.identificationNumber}</p>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="firstName">Primer Nombre</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <p style={{ color: 'red' }}>{formik.errors.firstName}</p>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="middleName">Segundo Nombre</label>
                    <input
                        type="text"
                        id="middleName"
                        name="middleName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.middleName}
                    />
                    {formik.touched.middleName && formik.errors.middleName ? (
                        <p style={{ color: 'red' }}>{formik.errors.middleName}</p>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="username">Primer Apellido</label>
                    <input
                        type="text"
                        id="firstLastName"
                        name="firstLastName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstLastName}
                    />
                    {formik.touched.firstLastName && formik.errors.firstLastName ? (
                        <p style={{ color: 'red' }}>{formik.errors.firstLastName}</p>
                    ) : null}
                </div>


                <div>
                    <label htmlFor="secondLastName">Segundo Apellido</label>
                    <input
                        type="text"
                        id="secondLastName"
                        name="secondLastName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.secondLastName}
                    />
                    {formik.touched.secondLastName && formik.errors.secondLastName ? (
                        <p style={{ color: 'red' }}>{formik.errors.secondLastName}</p>
                    ) : null}
                </div>


                <div>
                    <label htmlFor="phoneNumber">Numero de Telefono</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phoneNumber}
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                        <p style={{ color: 'red' }}>{formik.errors.phoneNumber}</p>
                    ) : null}
                </div>


                <div>
                    <label htmlFor="email">Correo Electronico</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <p style={{ color: 'red' }}>{formik.errors.email}</p>
                    ) : null}
                </div>


                <div>
                    <label htmlFor="typeOfRole">Tipo de Rol</label>
                    <select
                        id="typeOfRole"
                        name="typeOfRole"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.typeOfRole}
                    >
                        <option value="">Seleccione...</option>
                        <option value="dni">Administrador</option>
                        <option value="passport">Vendedor</option>
                        <option value="license">Usuario</option>
                    </select>
                    {formik.touched.typeOfRole && formik.errors.typeOfRole ? (
                        <p style={{ color: 'red' }}>{formik.errors.typeOfRole}</p>
                    ) : null}
                </div>

                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Registre;