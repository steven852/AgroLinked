import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HistoryIcon from '@mui/icons-material/History';
import AddIcon from '@mui/icons-material/Add';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NavBar from "./NavBar.js";
import MailIcon from '@mui/icons-material/Mail';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CloudIcon from '@mui/icons-material/Cloud';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Link } from 'react-router-dom';
import Schedules from './Schedules';

class Dashboard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      open:{
        schedules: false,
        finances: false,
      },
    };
    this.drawerWidth = 240;

    this.handleClick = (e) => {
      const name = e.currentTarget.getAttribute('name');
      this.setState(prevState => ({
        open: {
          ...prevState.open,
          [name]: !prevState.open[name],
        },
      }));
    };
  }

  render(){
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <NavBar drawerWidth={this.drawerWidth}/>
        <Drawer
          sx={{
            width: this.drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: this.drawerWidth,
              boxSizing: 'border-box',
              backgroundImage: 'url(/storage/images/loumpina.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 1,
            },
          }}
          variant="permanent"
          anchor="left"

        >
          <Toolbar className={"bg-dark d-flex justify-content-center align-items-center"}>
            <a className={"h3 link-light text-decoration-none font-weight-bold mt-1"} href="/">AgroLinked</a>
          </Toolbar>
          <Divider />
          <List className={"text-light"}>
            <ListItemButton component={Link} to="/" style={{ textDecoration: 'none' }}>
              <ListItemIcon className={"text-primary"}>
                <ShowChartIcon />
              </ListItemIcon>
              <ListItemText primary={"Overview"} />
            </ListItemButton>
            <ListItemButton name="schedules" onClick={this.handleClick}>
              <ListItemIcon className={"text-primary"}>
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText primary={"Calendar"} />
              {this.state.open.schedules ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={this.state.open.schedules} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} component={Link} to="/schedules">
                  <ListItemIcon className={"text-primary"}>
                    <EventNoteIcon />
                  </ListItemIcon>
                  <ListItemText primary="Schedules" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} component={Link} to="/schedules">
                  <ListItemIcon className={"text-primary"}>
                    <EventNoteIcon />
                  </ListItemIcon>
                  <ListItemText primary="Calendar Settings" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton name="finances" onClick={this.handleClick}>
              <ListItemIcon className={"text-primary"}>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary={"Finances"} />
              {this.state.open.finances ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={this.state.open.finances} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} component={Link} to="/transactions/create">
                  <ListItemIcon className={"text-primary"}>
                    <AddIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Transaction" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton>
              <ListItemIcon className={"text-primary"}>
                <CloudIcon />
              </ListItemIcon>
              <ListItemText primary={"Weather"} />
            </ListItemButton>
          </List>
          <Divider />
          <List className={"text-white"}>
            <ListItemButton>
              <ListItemIcon className={"text-primary"}>
                <ManageAccountsIcon />
              </ListItemIcon>
              <ListItemText primary={"Account"} />
            </ListItemButton>
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          {this.props.content}
        </Box>
      </Box>
    );
  }

}

export default Dashboard;
