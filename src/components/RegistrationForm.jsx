import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { register } from "../redux/auth/operations";

const validationSchema = Yup.object({
    name: Yup.string().min(2, "İsim en az 2 karakter olmalı").required("İsim gerekli"),
    email: Yup.string().email("Geçerli bir e-posta gir").required("E-posta gerekli"),
    password: Yup.string().min(6, "En az 6 karakter").required("Şifre gerekli"),
  });

  
  export const RegistrationForm = () => {
    const dispatch = useDispatch();
  
    const handleSubmit = (values, actions) => {
      dispatch(register(values));
      actions.resetForm();
    };
  
    return (
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label>
            İsim
            <Field type="text" name="name" className={css.input} />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>
          <label>
            E-posta
            <Field type="email" name="email" className={css.input} />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>
          <label>
            Şifre
            <Field type="password" name="password" className={css.input} />
            <ErrorMessage name="password" component="div" className={css.error} />
          </label>
          <button type="submit" className={css.button}>Kayıt Ol</button>
        </Form>
      </Formik>
    );
  };
  