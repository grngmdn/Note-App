import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';
import { Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { format } from 'date-fns';

const drawerWidth = 240

const classes = {
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      ".MuiDrawer-paper": {
        width: drawerWidth,
        boxSizing: "border-box",
      },
    },
    active: {
        background: "#f4f4f4"
    },
    title: {
        padding: 3
    },
  }

function Layout({ children }) {

    const history = useHistory();
    const location = useLocation();

    // Menu Links 
    const menuItems = [
        {
            text: "My Notes",
            icon: <SubjectOutlined color="primary" />,
            path: "/"
        },
        {
            text: "Create Note",
            icon: <AddCircleOutlined color="primary" />,
            path: "/create"
        }
    ] 


  return (
          <Box 
            sx={{
              background: "#f9f9f9",
              width: "100%",
              display: 'flex',
              paddingTop: 10,
              paddingBottom: 2
            }}
          >

            {/* App Bar  */}

            <AppBar
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                elevation={1}
            >
                <Toolbar>
                    <Typography
                        sx={{flexGrow: 1}}
                    >
                        Today is the {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        Madan
                    </Typography>
                    <Avatar 
                        src='/madan.jpg'
                        sx={{marginLeft: 2}}
                    />
                </Toolbar>
            </AppBar>


            {/* Side Bar  */}
            <Drawer
                sx={
                    classes.drawer
                }
                variant= "permanent"
                anchor= 'left'
            >
                <div>
                    <Typography
                        variant='h5'
                        sx={
                            classes.title
                        }
                    >
                        Ninja Notes
                    </Typography>
                </div>

            {/* Menu Items  */}
            <List>
                {menuItems.map(item => (
                <ListItem
                    button
                    key={item.text}
                    onClick={() => history.push(item.path)}
                    sx={location.pathname === item.path ? classes.active : null}
                >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />

                </ListItem>
                ))}
            </List>
            </Drawer>
            <Box>
                {children}
            </Box>   
          </Box>
  )
}

export default Layout; 