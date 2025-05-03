import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";



export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
    await dispatch(login(values));
    } catch (error) {
    console.error("Login error:", error);
    } finally {
    setSubmitting(false);
    }
};

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    password: Yup.string().min(6, "Must be at least 6 characters").required("Şifre gerekli"),
  });


  return (
    <>
        <h1 className={css.title}>Login Page</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
       {({ isSubmitting }) => (
      <Form className={css.form}>
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
        {isSubmitting ? "Loading..." : "Log In"}
        </button>
      </Form>
       )}
    </Formik>
    </>
  );
};
