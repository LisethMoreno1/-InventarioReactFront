import React, { useState } from 'react';
import { useFormik } from 'formik';
import { loginSchema } from '../../types/Login/loginSchemas';
import { postLogin } from '../../services/api/loginService/loginService';

const Login: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      identificationNumber: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setError(null);
      try {
        const response = await postLogin(values);
        console.log('Login successful:', response);
      } catch (error) {
        console.error('Login failed:', error);
        setError('Nombre de usuario o contraseña inválidos');
      }
    },
  });

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={formik.handleSubmit}>
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
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <p style={{ color: 'red' }}>{formik.errors.password}</p>
          ) : null}
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
