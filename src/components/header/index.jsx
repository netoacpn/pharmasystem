import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import WebhookIcon from '@mui/icons-material/Webhook';
import logoutApp from "../../hooks/logoutApp"
import SideBar from "../sidebar/index"

function Header() {
  const [auth, setAuth] = React.useState(true);

  const handleLogout = (event) => {
    logoutApp()
  }

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#363636'}}>
        <Toolbar>
          {auth && (
            <div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}            
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
      </div>
    )}
          <WebhookIcon />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PharmaSystem
          </Typography>
          
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleLogout}
              >
              <LoginIcon />
              </IconButton>
              
        </Toolbar>
      </AppBar>
      <SideBar state={state} setState={setState} toggleDrawer={toggleDrawer}/>
    </Box>
  );
}

export { Header }