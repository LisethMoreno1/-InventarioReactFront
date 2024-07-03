import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, IconButton, Menu, MenuItem, Tooltip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import AppRouter from '../../routes/AppRouter';
import { RouteType } from '../../routes/route';

/* const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
 */const drawerWidth = 250;

const PermanentDrawerLeft: React.FC = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            Inventario
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Herramientas">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
         {/*  {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}  */}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {AppRouter.map((route: RouteType, index: number) => (
            route.children ? (
              <Accordion key={index} sx={{ width: '100%' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <ListItemIcon>
                    {route.sidebarProps?.icon}
                  </ListItemIcon>
                  <Typography>{route.sidebarProps?.displayText}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List component="div" disablePadding>
                    {route.children.map((childRoute, childIndex) => (
                      <ListItem key={childIndex} disablePadding>
                        <ListItemButton
                          component={Link as React.ElementType}
                          to={`${route.path}/${childRoute.path}`} // Navegación combinada
                          sx={{ pl: 4 }}
                        >
                          <ListItemIcon>
                            {childRoute.sidebarProps?.icon}
                          </ListItemIcon>
                          <ListItemText primary={childRoute.sidebarProps?.displayText} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ) : (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component={Link as React.ElementType}
                  to={route.path}
                >
                  <ListItemIcon>
                    {route.sidebarProps?.icon}
                  </ListItemIcon>
                  <ListItemText primary={route.sidebarProps?.displayText} />
                </ListItemButton>
              </ListItem>
            )
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

export default PermanentDrawerLeft;
