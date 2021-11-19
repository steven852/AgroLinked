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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NavBar from "./NavBar.js";

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
              opacity: 0.9,
            },
          }}
          variant="permanent"
          anchor="left"

        >
          <Toolbar className={"d-flex justify-content-center align-items-center"}>
            <a className={"h3 link-light text-decoration-none font-weight-bold  mt-1"} href="/">AgroLinked</a>
          </Toolbar>
          <Divider />
          <List className={"text-white"}>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon className={"text-white"}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List className={"text-white"}>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon className={"text-white"}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />

        </Box>
      </Box>
    );
  }
}

export default Home;
