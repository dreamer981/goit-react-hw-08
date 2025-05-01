import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations'; // login operation
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = (values, actions) => {
    const { email, password } = values;

    // Dispatch login action
    dispatch(login({ email, password }))
      .then(() => {
        navigate('/contacts'); // Navigate to contacts page on success
      })
      .catch(error => {
        console.error('Login failed:', error);
      });
    
    actions.setSubmitting(false); // End form submission
  };

  return (
    <div className={styles.loginPage}>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" id="email" />
            <ErrorMessage name="email" component="div" className={styles.error} />
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" id="password" />
            <ErrorMessage name="password" component="div" className={styles.error} />
          </div>

          <button type="submit" className={styles.submitButton}>Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
