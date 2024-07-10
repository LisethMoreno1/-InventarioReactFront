import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Link as MuiLink,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { FunctionComponent, useState } from "react";

import { AccountCircle } from "@mui/icons-material";
import AddHomeIcon from "@mui/icons-material/AddHome";
import MailIcon from "@mui/icons-material/Mail";
import { Link, Link as RouterLink } from "react-router-dom";
import AppRouter from "../../routes/AppRouter";
import { RouteType } from "../../routes/route";

const StyledContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const StyledHeader = styled("header")({
  backgroundColor: "#f0f0f0",
  padding: "8px 16px",
  height: 56,
  display: "flex",
  alignItems: "center",
});

const StyledAvatar = styled(Avatar)({
  width: 32,
  height: 32,
  border: "1px solid #ccc",
});

const StyledSidebar = styled(Paper)(({ theme }) => ({
  backgroundColor: "#f0f0f0",
  padding: theme.spacing(2),
  width: 240,
  flexShrink: 0,
}));

const StyledMain = styled("main")(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
}));

const StyledCard = styled(Paper)(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    cursor: "pointer",
  },
}));

const MountainIcon: FunctionComponent<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3l4 8 5-5 5 15H3L8 3z" />
    </svg>
  );
};

const Component: FunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const filteredRoutes = AppRouter.filter((route) => route.sidebarProps);

  return (
    <StyledContainer>
      <StyledHeader>
        <MuiLink
          component={RouterLink}
          to="#"
          color="primary"
          underline="hover"
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MountainIcon style={{ width: 24, height: 24 }} />
            <span style={{ marginLeft: 8 }}>Inventario</span>
          </Box>
        </MuiLink>

        <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
          <Badge color="secondary" variant="dot">
            <MailIcon />
          </Badge>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={handleClose}>Cerrar Sección</MenuItem>
          </Menu>
        </Box>
      </StyledHeader>
      <Box sx={{ display: "flex", flex: 1 }}>
        <StyledSidebar elevation={0}>
          <Toolbar sx={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <List>
              {filteredRoutes.map((route: RouteType, index: number) =>
                route.children ? (
                  <Accordion key={index}>
                    <AccordionSummary>
                      <ListItemIcon sx={{ width: 20, height: 20 }}>
                        {index % 2 === 0 ? (
                          <AddHomeIcon />
                        ) : (
                          route.sidebarProps?.icon
                        )}
                      </ListItemIcon>
                      <Typography>{route.sidebarProps?.displayText}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <List component="div" disablePadding>
                        {route.children.map((childRoute, childIndex) => (
                          <ListItem
                            key={childIndex}
                            disablePadding
                            sx={{ display: "block" }}
                          >
                            <ListItemButton
                              component={RouterLink}
                              to={`${route.path}/${childRoute.path}`}
                            >
                              <ListItemIcon sx={{ width: 20, height: 20 }}>
                                {index % 2 === 0 ? (
                                  <AddHomeIcon />
                                ) : (
                                  childRoute.sidebarProps?.icon
                                )}
                              </ListItemIcon>
                              <ListItemText
                                primary={childRoute.sidebarProps?.displayText}
                                sx={{ opacity: 5 }}
                              />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                ) : (
                  <ListItem
                    key={index}
                    disablePadding
                    sx={{ display: "block" }}
                  >
                    <ListItemButton
                      component={Link as React.ElementType}
                      to={route.path}
                    >
                      <ListItemIcon sx={{ width: 20, height: 20 }}>
                        {index % 2 === 0 ? (
                          <AddHomeIcon />
                        ) : (
                          route.sidebarProps?.icon
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={route.sidebarProps?.displayText}
                        sx={{ opacity: 5 }}
                      />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
          </Toolbar>
        </StyledSidebar>
        {/*   <StyledMain>
          <Grid container spacing={4}>
            {[...Array(4)].map((_, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <StyledCard elevation={3}>
                  <MuiLink href="#">
                    <Typography component="span" className="sr-only">
                      View
                    </Typography>
                  </MuiLink>
                  <img
                    src="/placeholder.svg"
                    alt={`Content ${index + 1}`}
                    width={400}
                    height={300}
                    style={{ objectFit: "cover", width: "100%", height: 200 }}
                  />
                  <Box sx={{ padding: 16 }}>
                    <Typography variant="h6">Content {index + 1}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Description of content {index + 1}.
                    </Typography>
                  </Box>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </StyledMain> */}
      </Box>
    </StyledContainer>
  );
};

export default Component;
