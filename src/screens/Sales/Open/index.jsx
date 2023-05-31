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

import React, { useEffect } from "react";
import axios from "axios";
function SalesOpen() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [fetchData, setFetchData] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const data = [
  //   { id: 1, name: "John Doe", age: 25, location: "New York" },
  //   { id: 2, name: "Jane Smith", age: 30, location: "London" },
  //   { id: 3, name: "Bob Johnson", age: 40, location: "Paris" },
  //   { id: 4, name: "Alice Williams", age: 35, location: "Berlin" },
  //   { id: 5, name: "Charlie Brown", age: 28, location: "Sydney" },
  // ];
  const [searchTerm, setSearchTerm] = React.useState("");

  // const filteredData = fetchData.filter((item) =>
  //   item.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/sales/list`)
      .then((response) => setFetchData(response.data.data))
      .catch((error) => console.error(error));
  }, []);
  console.log(fetchData);
  return (
    <div>
      <div className='main_open'>
        <div className='sub_main_open'>
          <div>
            <Typography variant='h4' fontFamily={"Poppins"} fontWeight={500}>
              Manage Leads&gt;Open&gt;Manage Leads
            </Typography>
          </div>
          <div className='sub_main_main_open'>
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
                  <TableCell>LEAD ID</TableCell>
                  <TableCell>CUSTOMER NAME</TableCell>
                  <TableCell>COMPANY NAME</TableCell>
                  <TableCell>CLIENT POC</TableCell>
                  <TableCell>EMAIL</TableCell>
                  <TableCell>QUICK ACTIONS</TableCell>
                  <TableCell>MORE CONTACTS</TableCell>
                  <TableCell>LEAD STAGE</TableCell>
                  <TableCell>LEAD STATUS</TableCell>
                  <TableCell>OWNERS</TableCell>
                  <TableCell>LEAD INQUIRY</TableCell>
                  <TableCell>PRODUCT</TableCell>
                  <TableCell>ACTIVITY HISTORY</TableCell>
                  <TableCell>LAST ACTIVITY</TableCell>
                  <TableCell>NEXT AUCTION/DATE</TableCell>
                  <TableCell>WIN PROBABILITY</TableCell>
                  <TableCell>DEAL SIZE</TableCell>
                  <TableCell>EXISTING BUDGET</TableCell>
                  <TableCell>LEAD SOURCE</TableCell>
                  <TableCell>NOTES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fetchData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.lead_id}</TableCell>
                    <TableCell>{item.customer_name}</TableCell>
                    <TableCell>{item.company_name}</TableCell>
                    <TableCell>{item.client_poc}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.quick_actions}</TableCell>
                    <TableCell>{item.more_contacts}</TableCell>
                    <TableCell>{item.lead_stage}</TableCell>
                    <TableCell>{item.lead_status}</TableCell>
                    <TableCell>{item.owners}</TableCell>
                    <TableCell>{item.lead_inquiry}</TableCell>
                    <TableCell>{item.product}</TableCell>
                    <TableCell>{item.activity_history}</TableCell>
                    <TableCell>{item.last_activity}</TableCell>
                    <TableCell>{item.next_auction_date}</TableCell>
                    <TableCell>{item.win_probability}</TableCell>
                    <TableCell>{item.deal_size}</TableCell>
                    <TableCell>{item.existing_budget}</TableCell>
                    <TableCell>{item.lead_source}</TableCell>
                    <TableCell>{item.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default SalesOpen;
