import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NavBar from "./NavBar.js";
import Calendar from "./Calendar.js";
import MailIcon from '@mui/icons-material/Mail';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CloudIcon from '@mui/icons-material/Cloud';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    };

    this.drawerWidth = 240;
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
            <ListItem button>
              <ListItemIcon className={"text-primary"}>
                <ShowChartIcon />
              </ListItemIcon>
              <ListItemText primary={"Overview"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon className={"text-primary"}>
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText primary={"Calendar"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon className={"text-primary"}>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary={"Financial"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon className={"text-primary"}>
                <CloudIcon />
              </ListItemIcon>
              <ListItemText primary={"Weather"} />
            </ListItem>
          </List>
          <Divider />
          <List className={"text-white"}>
          <ListItem button>
            <ListItemIcon className={"text-primary"}>
              <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText primary={"Account"} />
          </ListItem>
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Calendar />
        </Box>
      </Box>
    );
  }
}

export default Home;
