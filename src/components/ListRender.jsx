import { useState, useEffect } from "react";
import {
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import CustomDialog from "./CustomDialog";

// const options = { method: 'GET', url: 'http://localhost:5000/api/users/list' };

const ListRender = ({ type ,data, setData}) => {
  // const [data, setData] = useState([]);
  const [delModal, setDelModal] = useState(false);
  const [modalType, setModalType] = useState("update");
  const [currentId, setCurrentId] = useState("");
  const [modal, setModal] = useState(false);
  const [fieldsName, setFieldsName] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   axios.request(options).then(function (response) {
  //     setData(response.data.data);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }, []);

  // console.log(data,"here is data coming")

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
      {data.length > 0 && (
        <CustomDialog
          modalType={modal ? "update" : "delete"}
          setOpenModal={modal ? setModal : setDelModal}
          open={modal || delModal}
          setData={setData} // Update the prop name here to setData
          data={data}
          fields={fieldsName}
          id={currentId}
        />
      )}
      {data.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: "#616161" }}>
                <TableCell align='center'>
                  {type === "img" ? <AttachMoneyIcon /> : "id"}
                </TableCell>
                {fieldsName.map((field) => (
                  <TableCell key={field} align='center'>
                    {field}
                  </TableCell>
                ))}
                {type !== "img" && (
                  <TableCell align='center'>Actions</TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((student, i) => (
                <TableRow key={i}>
                  <TableCell align='center'>
                    {type === "img" ? (
                      <AccountCircleIcon fontSize='large' />
                    ) : (
                      i + 1
                    )}
                  </TableCell>
                  {fieldsName.map((field) => (
                    <TableCell key={`${student._id}-${field}`} align='center'>
                      {student[field]}
                    </TableCell>
                  ))}
                  {type !== "img" && (
                    <TableCell align='center'>
                      <Tooltip title='Edit'>
                        <IconButton
                          onClick={() => handleEditStudent(student._id)}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title='Delete'>
                        <IconButton
                          onClick={() => handleDeleteStudent(student._id)}
                        >
                          <DeleteIcon color='secondary' />
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
        <Typography>No data found</Typography>
      )}
    </>
  );
};

export default ListRender;
