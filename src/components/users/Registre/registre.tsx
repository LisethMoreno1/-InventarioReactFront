import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { registreSchema } from '../../../types/users/registre/registreSchemas';
import { Roles } from '../../../interfaces/Rol/rol';
import { typeOfIdentification } from '../../../interfaces/typeOfIdentification/typeOfIdentification';
import { PostUsers } from '../../../services/api/userService/userService';
import { getRoles } from '../../../services/api/RolesService/rolesService';
import { getTypeOfIdentifications } from '../../../services/api/typeOfIdentificationService/typeOfIdentificationService';
import { Genre } from '../../../interfaces/typeOfGenders/typeOfGenders';
import { getTypeOfGenders } from '../../../services/api/genreService/genreService';

const Registre: React.FC = () => {

    const [roles, setRoles] = useState<Roles[]>([]);
    const [typeOfIdentifications, setTypeOfIdentifications] = useState<typeOfIdentification[]>([]);
    const [typeOfGenders, setTypeOfGenders] = useState<Genre[]>([]);


    const formik = useFormik({
        initialValues: {
            /*  id: 0, */
            typeOfIdentification: 0,
            identificationNumber: '',
            firstName: '',
            middleName: '',
            firstLastName: '',
            secondLastName: '',
            phoneNumber: '',
            email: '',
            genre: 0,
            typeOfRole: 0

        },
        validationSchema: registreSchema,
        onSubmit: async (values, { resetForm }) => {
            console.log(values)
            try {
                const userRequest = {
                    ...values,
                    typeOfIdentification: {
                        name:
                            typeOfIdentifications?.find((x) => x?.id === Number(values?.typeOfIdentification || ""))?.name || '',
                    },
                    genre: {
                        genre:
                            typeOfGenders?.find((x) => x?.id === Number(values?.genre || ""))?.genre || '',
                    },
                    role: {
                        typeOfRole:
                            roles?.find((x) => x?.id === Number(values?.typeOfRole || ""))?.typeOfRole || '',
                    },
                };
                await PostUsers(userRequest);
                alert('Usuario registrado exitosamente');
                resetForm();
            } catch (error) {
                console.error('Error al registrar usuario:', error);
                alert('Hubo un problema al registrar el usuario');
            }
        },
    });

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const rolesData = await getRoles();
                setRoles(rolesData);
            } catch (error) {
                console.error('Error al obtener roles:', error);
            }
        };

        fetchRoles();
    }, []);

    useEffect(() => {
        const fetchTypeOfGenders = async () => {
            try {
                const Genre = await getTypeOfGenders();
                setTypeOfGenders(Genre);
            } catch (error) {
                console.error('Error al obtener generos:', error);
            }
        };

        fetchTypeOfGenders();
    }, []);

    useEffect(() => {
        const fetchTypeOfIdentifications = async () => {
            try {
                const typeOfIdentificationsData = await getTypeOfIdentifications();
                setTypeOfIdentifications(typeOfIdentificationsData);
            } catch (error) {
                console.error('Error al obtener typeOfIdentifications:', error);
            }
        };

        fetchTypeOfIdentifications();
    }, []);

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
                        {typeOfIdentifications.map(type => (
                            <option key={type.id} value={type.id}>{type.name}</option>
                        ))}
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
                    <label htmlFor="genre">Género</label>
                    <select
                        name="genre"
                        id="genre"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.genre}
                    >
                        <option value="">Seleccione...</option>
                        {typeOfGenders.map((genre) => (
                            <option key={genre.id} value={genre.id}>
                                {genre.genre}
                            </option>
                        ))}
                    </select>
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
                        {roles.map(role => (
                            <option key={role.id} value={role.id}>{role.typeOfRole}</option>
                        ))}
                    </select>
                    {formik.touched.typeOfRole && formik.errors.typeOfRole ? (
                        <p style={{ color: 'red' }}>{formik.errors.typeOfRole}</p>
                    ) : null}
                </div>

                <button type="submit">Registrar Usuario</button>
            </form>
        </div>
    );
};

export default Registre;