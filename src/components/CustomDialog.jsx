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
import {  updateUser, deleteUser } from "../services/getAllUsers";

const CustomDialog = ({ modalType, open, setOpenModal, id, data, fields }) => {
  const [formValues, setFormValues] = useState({});
  const [sendValues,setSendValues]=useState()
  const exemptValues = ["_id", "createdAt", "updatedAt", "__v"];




  const handleClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    if (data && id) {
      const selectedData = data.find((item) => item._id === id);
      if (selectedData) {
        setFormValues(selectedData);
        setSendValues((obj)=>
            Object.fromEntries(Object.entries(selectedData).filter(([key, value]) => !exemptValues.includes(key)))
        )    
      }
    }
  }, [data, id]);

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (modalType === "update") {
      await updateUser(formValues,id);
    } else if (modalType === "delete") {
      await deleteUser(id);
    }

    // console.log(sendValues,"this data")
    handleClose();
    console.log(formValues,id,"this data")
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{modalType === "update" ? "Update" : "Delete"}</DialogTitle>
      <form onSubmit={handleSubmit}>
        {modalType === "update" && data !== undefined ? (
          <DialogContent>
            {fields !== undefined &&
              fields.map((field) => {
                if (exemptValues.includes(field)) {
                  return null; // Exclude the field from rendering
                }
                return (
                  <TextField
                    key={field}
                    margin="dense"
                    label={field}
                    name={field}
                    value={formValues[field]}
                    onChange={handleInputChange}
                    fullWidth
                  />
                );
              })}
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
