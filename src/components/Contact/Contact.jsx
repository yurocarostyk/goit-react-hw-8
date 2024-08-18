import { useDispatch, useSelector } from "react-redux";

import ModalComponent from "../ModalComponent/ModalComponent";

import { deleteContact } from "../../redux/contacts/operation";

import { MdEdit } from "react-icons/md";
import DeleteIcon from "@mui/icons-material/Delete";

import { setCurrentContact } from "../../redux/contacts/slice";
import { selectCurrentContact } from "../../redux/contacts/selector";
import { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";

import css from "./Contact.module.css";

export default function Contact({ contactInfo: { name, number, id } }) {
  const currentContact = useSelector(selectCurrentContact);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const shouldBeDisabled = currentContact ? true : false;

  const dispatch = useDispatch();

  const onDelete = () => {
    setIsModalOpen(true);
  };

  const onSureDelete = () => {
    dispatch(deleteContact(id));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSetCurrentContact = () => {
    dispatch(setCurrentContact({ name, number, id }));
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: "14px",
        }}
      >
        <CardContent sx={{ padding: "12px" }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: 600,
              marginBottom: "20px",
            }}
          >
            <p className={css.text}>{name}</p>
            <CardActions sx={{ padding: 0 }}>
              <IconButton
                aria-label="edit"
                onClick={onSetCurrentContact}
                disabled={shouldBeDisabled}
              >
                <MdEdit aria-label="delete" />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={onDelete}
                disabled={shouldBeDisabled}
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Typography>
          <Typography variant="h6" color="text.secondary" component="p">
            {number}
          </Typography>
        </CardContent>
      </Card>

      <ModalComponent
        isOpen={isModalOpen}
        onClose={closeModal}
        onDelete={onSureDelete}
      />
    </>
  );
}