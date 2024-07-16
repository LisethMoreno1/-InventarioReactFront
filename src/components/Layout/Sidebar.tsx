import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, ListItemButton, useMediaQuery, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import AppRouter from '../../routes/AppRouter';
import { RouteType } from '../../routes/route';


const drawerWidth = 240;

const Sidebar: React.FC = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [open, setOpen] = React.useState(!isSmallScreen);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleLogout = () => {
        console.log('Logout clicked');
    };

    const filteredRoutes = AppRouter.filter(route => route.sidebarProps);


    return (
        <Grid container >
            <AppBar position="fixed" >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap >
                        Inventario
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="logout"
                        onClick={handleLogout}
                        sx={{ ml: 2 }}
                    >
                        <ExitToAppIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#222',
                        color: '#fff',
                        height: `calc(100vh - 64px)`,
                        top: '64px',
                        [theme.breakpoints.down('sm')]: {
                            top: '56px',
                        },
                    },
                }}
                variant={isSmallScreen ? 'temporary' : 'permanent'}
                anchor="left"
                open={open}
                onClose={handleClick}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <Toolbar />
                <List disablePadding>
                    {filteredRoutes.map((route: RouteType, index: number) => (
                        route.children ? (
                            <Accordion key={index} sx={{ width: '100%' }}>
                                <AccordionSummary >
                                    <ListItemIcon sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',

                                    }}>
                                        {index % 2 === 0 ? <HomeIcon /> : route.sidebarProps?.icon}
                                    </ListItemIcon>
                                    <Typography sx={{ opacity: open ? 1 : 0 }}>{route.sidebarProps?.displayText}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding>
                                        {route.children.map((childRoute, childIndex) => (
                                            <ListItem key={childIndex} disablePadding sx={{ display: 'block' }}>
                                                <ListItemButton
                                                    component={Link as React.ElementType}
                                                    to={`${route.path}/${childRoute.path}`}
                                                    sx={{
                                                        minHeight: 48,
                                                        justifyContent: open ? 'initial' : 'center',
                                                        px: 2.5,

                                                    }}
                                                >
                                                    <ListItemIcon sx={{
                                                        minWidth: 0,
                                                        mr: open ? 3 : 'auto',
                                                        justifyContent: 'center',

                                                    }}                                                                                                                                      >
                                                        {index % 2 === 0 ? <HomeIcon /> : childRoute.sidebarProps?.icon}
                                                    </ListItemIcon>
                                                    <ListItemText primary={childRoute.sidebarProps?.displayText} sx={{ opacity: open ? 1 : 0 }} />
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        ) : (
                            <ListItem key={index} disablePadding sx={{ display: 'block', }}>
                                <ListItemButton
                                    component={Link as React.ElementType}
                                    to={route.path}
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}>
                                        {index % 2 === 0 ? <HomeIcon /> : route.sidebarProps?.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={route.sidebarProps?.displayText} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        )
                    ))}
                </List>
            </Drawer>

            {/* Contenido principal */}
            <Grid item xs={12} md={9}>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        transition: theme.transitions.create(['margin'], {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.leavingScreen,
                        }),
                    }}
                >
                    <Toolbar />
                    {/*   <DashboardCharts /> */}
                </Box>
            </Grid>
        </Grid>
    );
};

export default Sidebar;
