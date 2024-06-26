import React from 'react';
import { Container } from '@mui/material';
import PermanentDrawerLeft from '../components/Layout/Sidebar';

const SideBar: React.FC = () => {
  return (
    <Container>
      <PermanentDrawerLeft />
    </Container>
  );
};

export default SideBar;
