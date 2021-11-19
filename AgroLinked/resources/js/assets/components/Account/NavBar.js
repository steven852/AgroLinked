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
    return (
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${this.props.drawerWidth}px)`, ml: `${this.props.drawerWidth}px` }}
      >
        <Toolbar className={"bg-danger container"}>
          <Typography variant="h6" noWrap component="div" className={"bg-danger row"}>
            Date - Event - Notifications - <Account />
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }

}

export default NavBar;
