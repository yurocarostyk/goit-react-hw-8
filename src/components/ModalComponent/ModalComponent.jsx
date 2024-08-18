import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { styled } from "@mui/material/styles";

export default function ModalComponent({ isOpen, onClose, onDelete }) {
  const handleClose = () => {
    onClose();
  };

  const handleDelete = () => {
    onDelete();
    onClose();
  };

  const CustomDialog = styled(Dialog)(() => ({
    "& .MuiBackdrop-root": {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      backdropFilter: "blur(5px)",
    },
    "& .MuiPaper-root": {
      borderRadius: 20,
      paddingBottom: 15,
      paddingRight: 15,
    },
  }));

  return (
    <CustomDialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" sx={{ fontWeight: 600 }}>
        Really?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure that you want to delete the contact?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()}>No</Button>
        <Button
          variant="outlined"
          color="error"
          onClick={handleDelete}
          autoFocus
        >
          Yeah, delete
        </Button>
      </DialogActions>
    </CustomDialog>
  );
}