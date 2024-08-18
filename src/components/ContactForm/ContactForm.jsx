import { useFormik } from "formik";
import * as Yup from "yup";
import LoadingButton from "@mui/lab/LoadingButton";

import { useDispatch, useSelector } from "react-redux";

import { addContact } from "../../redux/contacts/operation";

import css from "./ContactForm.module.css";

import { selectLoading } from "../../redux/contacts/selector";
import { TextField } from "@mui/material";

export default function ContactForm() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);

  const ValidationSchema = Yup.object().shape(
    {
      name: Yup.string("Must be a string!")
        .min(3, "Too short!")
        .max(50, "Too long!")
        .required("Required")
        .trim(),
      number: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required")
        .trim(),
    },
    { strict: true }
  );

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },

    validationSchema: ValidationSchema,
    onSubmit: (values, action) => {
      dispatch(addContact({ ...values }));
      action.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={css.container}>
      <h2 className={css.title}>Add contact</h2>

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
        id="number"
        name="number"
        label="Number"
        type="text"
        value={formik.values.number}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.number && Boolean(formik.errors.number)}
        helperText={formik.touched.number && formik.errors.number}
      />

      <LoadingButton
        type="submit"
        size="small"
        loading={loading}
        loadingIndicator="Loading…"
        variant="outlined"
        className={css.button}
        sx={{
          fontSize: 16,
        }}
      >
        <span>Add </span>
      </LoadingButton>
    </form>
  );
}