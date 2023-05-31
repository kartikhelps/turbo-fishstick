import { Button, Menu, MenuItem, Typography } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";

import React from "react";

function AddNote() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const data = [
    { id: 1, name: "John Doe", age: 25, location: "New York" },
    { id: 2, name: "Jane Smith", age: 30, location: "London" },
    { id: 3, name: "Bob Johnson", age: 40, location: "Paris" },
    { id: 4, name: "Alice Williams", age: 35, location: "Berlin" },
    { id: 5, name: "Charlie Brown", age: 28, location: "Sydney" },
  ];
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <div className='main_addnote '>
        <div className='sub_main_addnote '>
          <div>
            <Typography variant='h4' fontFamily={"Poppins"} fontWeight={500}>
              Manage Leads&gt;Open&gt;Manage Leads
            </Typography>
          </div>
          <div className='sub_main_main_addnote '>
            <div>
              <Button
                id='basic-button'
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup='true'
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  backgroundColor: "rgba(48, 79, 253, 1)",
                  padding: "1rem",
                  color: "#fff",
                  borderRadius: "1.5rem",
                }}
              >
                Take Action
              </Button>
              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                sx={{ padding: "0 1rem" }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
            <div>
              <Button
                id='basic-button'
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup='true'
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  backgroundColor: "rgba(48, 79, 253, 1)",
                  padding: "1rem",
                  color: "#fff",
                  borderRadius: "1.5rem",
                }}
              >
                Take Action
              </Button>
              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                sx={{ padding: "0 1rem" }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
            <div>
              <Button
                id='basic-button'
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup='true'
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  backgroundColor: "rgba(48, 79, 253, 1)",
                  padding: "1rem",
                  color: "#fff",
                  borderRadius: "1.5rem",
                }}
              >
                Take Action
              </Button>
              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                sx={{ padding: "0 1rem" }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
        <div>
          <TextField
            label='Search'
            variant='outlined'
            value={searchTerm}
            onChange={handleSearch}
            style={{ marginBottom: 10 }}
          />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.age}</TableCell>
                    <TableCell>{item.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default AddNote;
