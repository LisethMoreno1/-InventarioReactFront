import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Asegúrate de que la ruta del archivo sea correcta

const SideBarApp: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <button onClick={handleSidebarOpen}>Open Sidebar</button>
      <Sidebar open={sidebarOpen} onClose={handleSidebarClose} />
    </div>
  );
};

export default SideBarApp;
