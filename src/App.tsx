import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

const App: React.FC = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
