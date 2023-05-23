import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { alpha } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import { Link, NavLink } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import InputBase from "@mui/material/InputBase";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  ArrowUpward,
  CallOutlined,
  CorporateFare,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  Segment,
} from "@mui/icons-material";
import { Collapse } from "@mui/material";
const drawerWidth = 240;

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Navbar = () => {
  const theme = useTheme();
  // const history = useHistory();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const menuId = "primary-search-account-menu";

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function SidebarValue() {
    return (
      <></>
      // <ListItem sx={{ display: "block" }} disablePadding onClick={handleClick}>
      //   <ListItemButton
      //     sx={{
      //       minHeight: 48,
      //       justifyContent: open ? "initial" : "center",
      //       px: 2.5,
      //     }}
      //   >
      //     <ListItemIcon
      //       sx={{
      //         minWidth: 0,
      //         mr: open ? 3 : "auto",
      //         justifyContent: "center",
      //       }}
      //     >
      //       <InboxIcon />
      //     </ListItemIcon>
      //     <ListItemText primary={"hello"} sx={{ opacity: open ? 1 : 0 }} />
      //   </ListItemButton>
      // </ListItem>
    );
  }
  const [sideopen, setSideOpen] = React.useState(false);

  const handleSubMenuClick = () => {
    setSideOpen(!sideopen);
  };
  const [callopen, setCallOpen] = React.useState(false);

  const handleCallSubMenuClick = () => {
    setCallOpen(!callopen);
  };
  return (
    <Box sx={{ display: "flex", backgroundColor: "#fff" }}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "#fff" }} position='fixed' open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <Segment sx={{ color: "#000" }} />
          </IconButton>
          <img src='dashboard/product_x.svg' />
          <Typography
            noWrap
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontFamily: "Poppins",
              fontSize: "1.6rem",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            PRODUCT X
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#000" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size='large'
              aria-label='show 1 new notifications'
              color='inherit'
            >
              <Badge badgeContent={1} color='error'>
                <NotificationsIcon sx={{ color: "#000" }} />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu}>
                  <img src='/dashboard/profile.svg' />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem sx={{ display: "block", paddingLeft: "1rem" }}>
            <ListItemButton
              to='/dashboard'
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: "1.5rem",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <GridViewIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography fontSize={"1.5rem"} fontFamily={"Poppins"}>
                    Dashboard
                  </Typography>
                }
                sx={{
                  opacity: open ? 1 : 0,
                  fontSize: "1.5rem",
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            button
            onClick={handleSubMenuClick}
            sx={{
              display: "flex",
              paddingLeft: "1rem",
            }}
          >
            <ListItemButton
              to='/sales/lead_profile'
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: "1.5rem",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <SyncAltIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography fontSize={"1.5rem"} fontFamily={"Poppins"}>
                    Sales
                  </Typography>
                }
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
            {sideopen ? (
              <ExpandLess sx={{ marginLeft: "1rem" }} />
            ) : (
              <ExpandMore sx={{ marginLeft: "1rem" }} />
            )}
          </ListItem>
          <Collapse in={sideopen} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              {/* //open */}
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  to='/sales/open'
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: "1.5rem",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <FiberManualRecord />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography fontSize={"1.3rem"} fontFamily={"Poppins"}>
                        Open
                      </Typography>
                    }
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              {/* closed */}
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  to='/sales/closed'
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: "1.5rem",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <FiberManualRecord />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography fontSize={"1.3rem"} fontFamily={"Poppins"}>
                        Dashboard
                      </Typography>
                    }
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  to='/sales/insight'
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: "1.5rem",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <FiberManualRecord />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography fontSize={"1.3rem"} fontFamily={"Poppins"}>
                        Estimates and Insights
                      </Typography>
                    }
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              {/* insight */}
            </List>
          </Collapse>
          <ListItem
            onClick={handleCallSubMenuClick}
            sx={{ display: "flex", paddingLeft: "1rem" }}
          >
            <ListItemButton
              to='/calls'
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: "1.5rem",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <CallOutlined />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography fontSize={"1.5rem"} fontFamily={"Poppins"}>
                    Calls
                  </Typography>
                }
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
            {callopen ? (
              <ExpandLess sx={{ marginLeft: "1rem" }} />
            ) : (
              <ExpandMore sx={{ marginLeft: "1rem" }} />
            )}
          </ListItem>
          <Collapse in={callopen} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              {/* //open */}
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  to='/calls/open'
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: "1.5rem",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <FiberManualRecord />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography fontSize={"1.3rem"} fontFamily={"Poppins"}>
                        Open
                      </Typography>
                    }
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              {/* closed */}
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  to='/cals/closed'
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: "1.5rem",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <FiberManualRecord />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography fontSize={"1.3rem"} fontFamily={"Poppins"}>
                        Closed
                      </Typography>
                    }
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  to='/calls/open'
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: "1.5rem",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <FiberManualRecord />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography fontSize={"1.3rem"} fontFamily={"Poppins"}>
                        Estimates and Insights
                      </Typography>
                    }
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              {/* insight */}
            </List>
          </Collapse>
          <ListItem sx={{ display: "block", paddingLeft: "1rem" }}>
            <ListItemButton
              to='/coaching'
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: "1.5rem",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <CorporateFare />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography fontSize={"1.5rem"} fontFamily={"Poppins"}>
                    Coaching
                  </Typography>
                }
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <SidebarValue />
        {/* <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
};

export default Navbar;
