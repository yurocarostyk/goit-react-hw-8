import { useFormik } from "formik";
import * as Yup from "yup";

import LoadingButton from "@mui/lab/LoadingButton";
import { Button, TextField } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import { editContact } from "../../redux/contacts/operations";

import {
  selectCurrentContact,
  selectLoading,
} from "../../redux/contacts/selector";

import { setCurrentContact } from "../../redux/contacts/slice";

import css from "./EditForm.module.css";

export default function EditForm() {
  const dispatch = useDispatch();

  const { name, number, id } = useSelector(selectCurrentContact);

  const loading = useSelector(selectLoading);

  const ValidationSchema = Yup.object().shape(
    {
      name: Yup.string("Must be a string!")
        .min(3, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
      number: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    },
    { strict: true }
  );

  const initialValues = {
    name,
    number,
  };

  const formik = useFormik({
    initialValues: initialValues,

    validationSchema: ValidationSchema,

    onSubmit: (values, action) => {
      dispatch(editContact({ ...values, id }));
      action.resetForm();
    },
  });

  const onCancelClick = () => {
    dispatch(setCurrentContact(null));
  };

  return (
    <form onSubmit={formik.handleSubmit} className={css.container}>
      <h2 className={css.title}>Edit contact</h2>

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

      <div className="">
        <LoadingButton
          type="submit"
          size="small"
          loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
          className={css.button}
          sx={{
            fontSize: 16,
            marginRight: 1,
          }}
        >
          <span>Edit</span>
        </LoadingButton>

        <Button
          variant="outlined"
          color="error"
          sx={{ fontSize: 15 }}
          className={css.cancelButton}
          onClick={onCancelClick}
          disabled={loading}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}