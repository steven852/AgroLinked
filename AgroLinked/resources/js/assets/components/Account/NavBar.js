import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Account from "./NavBar/Account.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const drawerWidth = 240;

class NavBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    const date = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    return (
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${this.props.drawerWidth}px)`, ml: `${this.props.drawerWidth}px` }}
      >
        <Toolbar className={"bg-danger d-flex"}>
          <Typography variant="h6" noWrap component="div" className={"me-auto"}>
            {date.getDate()}
            -
            {monthNames[date.getMonth()]}
            -
            {date.getFullYear()}
          </Typography>

          <Typography variant="h6" noWrap component="div" className={"me-auto"}>
          No Event Today
          </Typography>

          <Typography variant="h6" noWrap component="div" className={"bg-danger"}>
          Notifications
          </Typography>

          <Account />
        </Toolbar>
      </AppBar>
    );
  }

}

export default NavBar;
