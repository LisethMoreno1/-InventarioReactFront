import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { registreSchema } from '../../../types/users/registre/registreSchemas';
import { Roles } from '../../../interfaces/Rol/rol';
import { PostUsers } from '../../../services/api/userService/userService';
import { getRoles } from '../../../services/api/RolesService/rolesService';
import { getTypeOfIdentifications } from '../../../services/api/typeOfIdentificationService/typeOfIdentificationService';
import { Genre } from '../../../interfaces/typeOfGenders/typeOfGenders';
import { getTypeOfGenders } from '../../../services/api/genreService/genreService';
import { NewUser } from '../../../interfaces/Users/UserCreate';
import { typeOfIdentification } from '../../../interfaces/typeOfIdentification/typeOfIdentification';

const Registre: React.FC = () => {
    const [roles, setRoles] = useState<Roles[]>([]);
    const [typeOfIdentifications, setTypeOfIdentifications] = useState<typeOfIdentification[]>([]);
    const [typeOfGenders, setTypeOfGenders] = useState<Genre[]>([]);
  
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
        genre: '',
        typeOfRole: '',
        password: ''
      },
      validationSchema: registreSchema,
      onSubmit: async (values, { resetForm }) => {
        try {
          const userRequest: NewUser = {
            id: 0, 
            typeOfIdentificationId: Number(values.typeOfIdentification),
            identificationNumber: values.identificationNumber,
            firstName: values.firstName,
            middleName: values.middleName,
            firstLastName: values.firstLastName,
            secondLastName: values.secondLastName,
            phoneNumber: values.phoneNumber,
            email: values.email,
            genre: Number(values.genre),
            role: Number(values.typeOfRole),
            password: values.password
          };
  
          const response = await PostUsers(userRequest);
  
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
  
          alert('Usuario registrado exitosamente');
          resetForm();
        } catch (error) {
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
          const GenreData = await getTypeOfGenders();
          setTypeOfGenders(GenreData);
        } catch (error) {
          console.error('Error al obtener géneros:', error);
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
          console.error('Error al obtener tipos de identificación:', error);
        }
      };
  
      fetchTypeOfIdentifications();
    }, []);

  return (
    <div>
      <h2>Registrar Usuario</h2>
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
            {typeOfIdentifications.map((type) => (
              <option key={type.id} value={type.id}>{type.name}</option>
            ))}
          </select>
          {formik.touched.typeOfIdentification && formik.errors.typeOfIdentification && (
            <p style={{ color: 'red' }}>{formik.errors.typeOfIdentification}</p>
          )}
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
          {formik.touched.identificationNumber && formik.errors.identificationNumber && (
            <p style={{ color: 'red' }}>{formik.errors.identificationNumber}</p>
          )}
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
          {formik.touched.firstName && formik.errors.firstName && (
            <p style={{ color: 'red' }}>{formik.errors.firstName}</p>
          )}
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
          {formik.touched.middleName && formik.errors.middleName && (
            <p style={{ color: 'red' }}>{formik.errors.middleName}</p>
          )}
        </div>

        <div>
          <label htmlFor="firstLastName">Primer Apellido</label>
          <input
            type="text"
            id="firstLastName"
            name="firstLastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstLastName}
          />
          {formik.touched.firstLastName && formik.errors.firstLastName && (
            <p style={{ color: 'red' }}>{formik.errors.firstLastName}</p>
          )}
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
          {formik.touched.secondLastName && formik.errors.secondLastName && (
            <p style={{ color: 'red' }}>{formik.errors.secondLastName}</p>
          )}
        </div>

        <div>
          <label htmlFor="phoneNumber">Número de Teléfono</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <p style={{ color: 'red' }}>{formik.errors.phoneNumber}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p style={{ color: 'red' }}>{formik.errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="genre">Género</label>
          <select
            id="genre"
            name="genre"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.genre}
          >
            <option value="">Seleccione...</option>
            {typeOfGenders.map((type) => (
              <option key={type.id} value={type.id}>{type.genre}</option>
            ))}
          </select>
          {formik.touched.genre && formik.errors.genre && (
            <p style={{ color: 'red' }}>{formik.errors.genre}</p>
          )}
        </div>

        <div>
          <label htmlFor="typeOfRole">Rol</label>
          <select
            id="typeOfRole"
            name="typeOfRole"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.typeOfRole}
          >
            <option value="">Seleccione...</option>
            {roles.map((role) => (
              <option key={role.id} value={role.id}>{role.typeOfRole}</option>
            ))}
          </select>
          {formik.touched.typeOfRole && formik.errors.typeOfRole && (
            <p style={{ color: 'red' }}>{formik.errors.typeOfRole}</p>
          )}
        </div>

        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <p style={{ color: 'red' }}>{formik.errors.password}</p>
          )}
        </div>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Registre;
