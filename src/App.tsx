import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SideBar from "./pages/SideBar";
import AppRouter from "./routes/AppRouter";


const App: React.FC = () => {
  return (
    <Router>

          <SideBar />
          <Routes>
            {AppRouter.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children?.map((childRoute, childIndex) => (
                  <Route
                    key={childIndex}
                    path={childRoute.path}
                    element={childRoute.element}
                  />
                ))}
              </Route>
            ))}
          </Routes>
    z
    </Router>
  );
};

export default App;
