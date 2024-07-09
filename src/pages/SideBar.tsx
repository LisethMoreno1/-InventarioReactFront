import { Container } from '@mui/material';
import React from 'react';
import MiniDrawer from '../components/Layout/Sidebar';

const SideBar: React.FC = () => {

  return (
    <Container>
      <MiniDrawer/>
    </Container>
  );
};

export default SideBar;
