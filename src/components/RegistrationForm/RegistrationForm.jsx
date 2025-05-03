import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(
        register({
          name: values.username,
          email: values.email,
          password: values.password,
        })
      );
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "İsim en az 2 karakter olmalı")
      .required("İsim gerekli"),
    email: Yup.string()
      .email("Geçerli bir e-posta gir")
      .required("E-posta gerekli"),
    password: Yup.string().min(6, "En az 6 karakter").required("Şifre gerekli"),
  });

  return (
    <>
      <h1 className={css.title}>Registration Page</h1>
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
        {({ isSubmitting }) => (
          <Form className={css.form}>
        <label>
          Name
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>
        <label>
          E-mail
          <Field type="email" name="email" className={css.input} />
          <ErrorMessage name="email" component="div" className={css.error} />
        </label>
        <label>
          Password
          <Field type="password" name="password" className={css.input} />
          <ErrorMessage name="password" component="div" className={css.error} />
        </label>
        <button type="submit" className={css.button} disabled={isSubmitting}>
        {isSubmitting ? "Loading..." : "Register"}
        </button>
      </Form>
        )}
    </Formik>
    </>
  );
};
