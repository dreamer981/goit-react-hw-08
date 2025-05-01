import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";

const validationSchema = Yup.object({
    email: Yup.string().email("Geçerli bir e-posta gir").required("E-posta gerekli"),
    password: Yup.string().min(6, "En az 6 karakter").required("Şifre gerekli"),
  });
  
  export const LoginForm = () => {
    const dispatch = useDispatch();
  
    const handleSubmit = (values, actions) => {
      dispatch(logIn(values));
      actions.resetForm();
    };
  
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
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
          <button type="submit" className={css.button}>Giriş Yap</button>
        </Form>
      </Formik>
    );
  };
  