import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Info } from '@mui/icons-material'; 

interface SidebarProps {
    open: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
    return (
        <Drawer open={open} onClose={onClose}>
            <div className="sidebar">
                <List>
                    <ListItem button component="a" href="#">
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button component="a" href="#">
                        <ListItemIcon>
                            <Info />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button component="a" href="#">
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText primary="Services" />
                    </ListItem>
                    <ListItem button component="a" href="#">
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
};

export default Sidebar;
