import { useFormik } from "formik";
import * as Yup from "yup";
import LoadingButton from '@mui/lab/LoadingButton';

import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operation";

import { selectLoading } from "../../redux/auth/selector";
import { TextField } from "@mui/material";

import css from "./RegistrationForm.module.css";

export default function RegisterForm() {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const ValidationSchema = Yup.object().shape(
    {
      name: Yup.string("Must be a string!")
        .min(3, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
      email: Yup.string().email().required("Required"),
      password: Yup.string().min(7, "Too Short!").required("Required"),
    },
    { strict: true }
  );

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },

    validationSchema: ValidationSchema,
    onSubmit: (values, action) => {
      dispatch(
        register({
          name: values.name.trim(),
          email: values.email.trim(),
          password: values.password.trim(),
        })
      );
      action.resetForm();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={css.form}>
        <h2 className={css.title}>Registration</h2>

        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <LoadingButton
          type="submit"
          loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
          className={css.btn}
        >
          <span>Register</span>
        </LoadingButton>
      </form>
    </>
  );
}