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
  InputLabel,
  Modal,
  Button,
  Box,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import CustomDialog from "./CustomDialog";

// const options = { method: 'GET', url: 'http://localhost:5000/api/users/list' };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const ListRender = ({ type, data, setData }) => {
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
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box sx={{ ...style, width: 400 }}>
          <AddModal />
        </Box>
      </Modal>
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
const AddModal = () => {
  const [open, setOpen] = useState(false);
  const [credentials, setCredentials] = useState({
    potential_deal: "",
    Win_probabiltiy: "",
    created_by: "",
    customer_name: "",
    inquiry: "",
    existing_budgets: "",
    leadStatus: "",
    leadStage: "",
    lead_title: "",
    lead_description: "",
    source: "",
    lead_id: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <form>
      <Box>
        <InputLabel
          sx={{
            fontSize: "1.6rem",
            fontFamily: "Poppins",
            fontWeight: 400,
          }}
        >
          Potential Deal
        </InputLabel>
        <TextField
          sx={{
            width: "30rem",
            backgroundColor: "rgba(192, 219, 234, 1)",
          }}
          placeholder='Enter username'
          required
          name='Potential Deal'
          value={credentials.potential_deal}
          // onChange={handleChange}
        />
      </Box>
      <Box>
        <InputLabel
          sx={{
            fontSize: "1.6rem",
            fontFamily: "Poppins",
            fontWeight: 400,
          }}
        >
          Win Probability
        </InputLabel>
        <TextField
          sx={{
            width: "30rem",
            backgroundColor: "rgba(192, 219, 234, 1)",
          }}
          name=' Win Probability'
          value={credentials.Win_probabiltiy}
          //onChange={handleChange}
        />
      </Box>
      <Box>
        <InputLabel
          sx={{
            fontSize: "1.6rem",
            fontFamily: "Poppins",
            fontWeight: 400,
          }}
        >
          Created By
        </InputLabel>
        <TextField
          sx={{
            width: "30rem",
            backgroundColor: "rgba(192, 219, 234, 1)",
          }}
          name=' Created By'
          value={credentials.created_by}
          //onChange={handleChange}
        />
      </Box>
      <Box>
        <InputLabel
          sx={{
            fontSize: "1.6rem",
            fontFamily: "Poppins",
            fontWeight: 400,
          }}
        >
          Customer Name
        </InputLabel>
        <TextField
          sx={{
            width: "30rem",
            backgroundColor: "rgba(192, 219, 234, 1)",
          }}
          name='
      Customer Name'
          value={credentials.customer_name}
          //onChange={handleChange}
        />
      </Box>
      <Box>
        <InputLabel
          sx={{
            fontSize: "1.6rem",
            fontFamily: "Poppins",
            fontWeight: 400,
          }}
        >
          Inquiry
        </InputLabel>
        <TextField
          sx={{
            width: "30rem",
            backgroundColor: "rgba(192, 219, 234, 1)",
          }}
          name=' Inquiry'
          value={credentials.inquiry}
          //onChange={handleChange}
        />
      </Box>
      <Box>
        <InputLabel
          sx={{
            fontSize: "1.6rem",
            fontFamily: "Poppins",
            fontWeight: 400,
          }}
        >
          Exisiting Budget
        </InputLabel>
        <TextField
          sx={{
            width: "30rem",
            backgroundColor: "rgba(192, 219, 234, 1)",
          }}
          name=' Exisiting Budget'
          value={credentials.existing_budgets}
          //onChange={handleChange}
        />
      </Box>
      <Box>
        <InputLabel
          sx={{
            fontSize: "1.6rem",
            fontFamily: "Poppins",
            fontWeight: 400,
          }}
        >
          Lead Status
        </InputLabel>
        <TextField
          sx={{
            width: "30rem",
            backgroundColor: "rgba(192, 219, 234, 1)",
          }}
          name='Lead Status'
          value={credentials.leadStatus}
          //onChange={handleChange}
        />
      </Box>
      <Box>
        <InputLabel
          sx={{
            fontSize: "1.6rem",
            fontFamily: "Poppins",
            fontWeight: 400,
          }}
        >
          Lead Stage
        </InputLabel>
        <TextField
          sx={{
            width: "30rem",
            backgroundColor: "rgba(192, 219, 234, 1)",
          }}
          name=' Lead Stage'
          value={credentials.leadStage}
          //onChange={handleChange}
        />
      </Box>
      <Box>
        <InputLabel
          sx={{
            fontSize: "1.6rem",
            fontFamily: "Poppins",
            fontWeight: 400,
          }}
        >
          Lead Title
        </InputLabel>
        <TextField
          sx={{
            width: "30rem",
            backgroundColor: "rgba(192, 219, 234, 1)",
          }}
          name=' Lead Title'
          value={credentials.lead_title}
          //onChange={handleChange}
        />
      </Box>
      <Box>
        <InputLabel
          sx={{
            fontSize: "1.6rem",
            fontFamily: "Poppins",
            fontWeight: 400,
          }}
        >
          Lead Description
        </InputLabel>
        <TextField
          sx={{
            width: "30rem",
            backgroundColor: "rgba(192, 219, 234, 1)",
          }}
          name=' Lead Description'
          value={credentials.lead_description}
          //onChange={handleChange}
        />
      </Box>
      <Box>
        <InputLabel
          sx={{
            fontSize: "1.6rem",
            fontFamily: "Poppins",
            fontWeight: 400,
          }}
        >
          Source
        </InputLabel>
        <TextField
          sx={{
            width: "30rem",
            backgroundColor: "rgba(192, 219, 234, 1)",
          }}
          name=' Source'
          value={credentials.source}
          //onChange={handleChange}
        />
      </Box>
      <Box>
        <InputLabel
          sx={{
            fontSize: "1.6rem",
            fontFamily: "Poppins",
            fontWeight: 400,
          }}
        >
          Lead Id
        </InputLabel>
        <TextField
          sx={{
            width: "30rem",
            backgroundColor: "rgba(192, 219, 234, 1)",
          }}
          name=' Lead Stage'
          value={credentials.lead_id}
          //onChange={handleChange}
        />
      </Box>
    </form>
  );
};
