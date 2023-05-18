import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
// import { addUser, updateUser, deleteUser } from "../../api/GetAllUser";
import { addUser, updateUser, deleteUser } from "../services/getAllUsers";

const CustomDialog = ({ modalType, open, setOpenModal, id, data, fields }) => {
  const [formValues, setFormValues] = useState({});

  const handleClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    if (data && id) {
      const selectedData = data.find((item) => item._id === id);
      if (selectedData) {
        setFormValues(selectedData);
      }
    }
  }, [data, id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (modalType === "create") {
      await addUser(formValues.name, formValues.email, formValues.password);
    } else if (modalType === "update") {
      await updateUser(formValues.name, formValues.email, id);
    } else if (modalType === "delete") {
      await deleteUser(id);
    }
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{modalType === "update" ? "Update" : "Delete"}</DialogTitle>
      <form onSubmit={handleSubmit}>
        {modalType === "update" ? (
          <DialogContent>
            {fields.map((field) => (
              <TextField
                key={field}
                margin="dense"
                label={field}
                type="text"
                name={field}
                value={formValues[field] || ""}
                onChange={handleInputChange}
                fullWidth
              />
            ))}
          </DialogContent>
        ) : (
          <DialogContent>Are you sure you want to delete?</DialogContent>
        )}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" color="primary">
            {modalType === "update" ? "Update" : "Delete"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CustomDialog;
