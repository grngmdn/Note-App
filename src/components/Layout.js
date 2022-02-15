import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const drawerWidth = 240

const classes = {
    drawer: {
      width: drawerWidth,
      ".MuiDrawer-paper": {
        width: drawerWidth,
      },
    },
  }

function Layout({ children }) {


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
              display: 'flex'
            }}
          >

            {/* App Bar  */}


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
                    >
                        Ninja Notes
                    </Typography>
                </div>

            {/* Menu Items  */}
            <List>
                {menuItems.map(item => (
                <ListItem
                    key={item.text}
                >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />

                </ListItem>
                ))}
            </List>
            </Drawer>

            {children}
          </Box>
  )
}

export default Layout;