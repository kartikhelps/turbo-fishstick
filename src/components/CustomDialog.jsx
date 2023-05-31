import React, { useState, useEffect, useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Select,
  MenuItem,
  Slider,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";
import { updateUser, deleteUser } from "../services/getAllUsers";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const CustomDialog = ({ modalType, open, setOpenModal, id, data, fields }) => {
  const { mastersData } = useContext(AuthContext);
  const [formValues, setFormValues] = useState({});
  const [dropDowns, setDropDowns] = useState(null);
  const exemptValues = [
    "_id",
    "createdAt",
    "updatedAt",
    "__v",
    "leadStatus",
    "leadStage",
    "source",
  ];

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

  const handleSliderChange = (event, value) => {
    setFormValues((prevValues) => ({ ...prevValues, win_probability: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (modalType === "update") {
      await updateUser(formValues, id);
    } else if (modalType === "delete") {
      await deleteUser(id);
    } else if (modalType === "add") {
      try {
        await axios.post("http://localhost:5000/api/leads", formValues);
        // Process the response or perform any additional actions
      } catch (error) {
        console.error(error);
      }
    }

    handleClose();
    console.log(formValues, id, "this data");
  };

  useEffect(() => {
    if (mastersData) {
      const filteredMastersData = { ...mastersData };
      delete filteredMastersData._id;
      delete filteredMastersData.createdAt;
      delete filteredMastersData.updatedAt;
      delete filteredMastersData.__v;
      setDropDowns(filteredMastersData);
    }
  }, [mastersData]);

  console.log("masters", dropDowns);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {modalType === "update"
          ? "Update"
          : modalType === "delete"
          ? "Delete"
          : "Add"}
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        {modalType !== "delete" && fields !== undefined ? (
          <DialogContent>
            {fields.map((field) => {
              if (exemptValues.includes(field)) {
                return null; // Exclude the field from rendering
              }
              return (
                <TextField
                  key={field}
                  margin="dense"
                  label={field}
                  name={field}
                  value={formValues[field] || ""}
                  onChange={handleInputChange}
                  fullWidth
                />
              );
            })}
            {dropDowns !== null &&
              Object.keys(dropDowns).map((fieldName) => (
                <div key={fieldName}>
                  <InputLabel htmlFor={fieldName}>
                    {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}:
                  </InputLabel>
                  <Select
                    id={fieldName}
                    name={fieldName}
                    sx={{ width: "128px" }}
                    onChange={handleInputChange}
                  >
                    {dropDowns[fieldName].map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              ))}
          </DialogContent>
        ) : (
          <DialogContent>
            <Typography>Are you sure you want to delete?</Typography>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" color="primary">
            {modalType === "update"
              ? "Update"
              : modalType === "delete"
              ? "Delete"
              : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CustomDialog;
