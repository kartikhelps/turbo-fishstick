import { useState, useEffect } from "react";
import {
  Button,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
  IconButton,
  FormHelperText,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import CustomDialog from "./CustomDialog";
import { useContext } from "react";
import "../screens/style.css"


const ListRender = ({ type, data, setData }) => {
  const [delModal, setDelModal] = useState(false);
  const [modalType, setModalType] = useState("update");
  const [currentId, setCurrentId] = useState("");
  const [modal, setModal] = useState(false);
  const [addModal, setAddModal] = useState(false); // New state for addModal
  const [fieldsName, setFieldsName] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (data) {
      setFieldsName(getFieldNames(data));
    }
  }, [data]);

  function handleDeleteStudent(id) {
    setDelModal(true);
    setModalType("delete");
    setCurrentId(id);
  }

  function handleEditStudent(id) {
    setModal(true);
    setModalType("update");
    setCurrentId(id);
  }

  function getFieldNames(obj) {
    if (Array.isArray(obj) && obj.length > 0) {
      const keys = Object.keys(obj[0]);
      const fields = keys.filter((key) => !Array.isArray(obj[0][key]));
      return fields;
    } else {
      const keys = Object.keys(obj);
      const fields = keys.filter((key) => !Array.isArray(obj[key]));
      return fields;
    }
  }

  return (
    <>
      <Button
        onClick={() => setAddModal(true)} // Set addModal to true on button click
        variant="contained"
        color="primary"
        style={{ margin: " 0 0 0 4rem" }}

      >
        Add Lead
      </Button >

      {/* Render the CustomDialog for update, delete, and add based on the modalType */}
      {
        (modal || delModal || addModal) && ( // Add the condition for addModal
          <CustomDialog
            modalType={modal ? "update" : delModal ? "delete" : "add"} // Update the modalType condition
            setOpenModal={modal ? setModal : delModal ? setDelModal : setAddModal} // Update the setOpenModal condition
            open={modal || delModal || addModal} // Update the open condition
            setData={setData}
            data={data}
            fields={fieldsName}
            id={currentId}
          />
        )
      }
      {
        data.length > 0 ? (
          <TableContainer component={Paper} style={{ margin: " 0 0 0 4rem" }}>
            <Table>
              <TableHead>
                <TableRow className="#">
                  <TableCell align="center">
                    {type === "img" ? <AttachMoneyIcon /> : "id"}
                  </TableCell>
                  {fieldsName.map((field) => (
                    <TableCell className="lead-header" key={field} align="center">
                      {field}
                    </TableCell>
                  ))}
                  {type !== "img" && (
                    <TableCell align="center">Actions</TableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((student, i) => (
                  <TableRow key={i} className="lead-table-contents" >
                    <TableCell align="center">
                      {type === "img" ? (
                        <AccountCircleIcon fontSize="large" />
                      ) : (
                        i + 1
                      )}
                    </TableCell>
                    {fieldsName.map((field) => (
                      <TableCell key={`${student._id}-${field}`} align="center">
                        {student[field]}
                      </TableCell>
                    ))}
                    {type !== "img" && (
                      <TableCell align="center">
                        <Tooltip title="Edit">
                          <IconButton
                            onClick={() => handleEditStudent(student._id)}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton
                            onClick={() => handleDeleteStudent(student._id)}
                          >
                            <DeleteIcon color="secondary" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography style={{ margin: "4rem 0 2rem 4rem" }}>No data found</Typography>
        )
      }
    </>
  );
};

export default ListRender;
