import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./Auth/(Auth)/AuthContext/AuthContext";
import SignInPage from "./pages/Login/SignInPage";
import AppRouter from "./routes/AppRouter";
import { ProtectedLayout } from "./components/Layout/ProtectedLayout"; // Asegúrate de que esto esté antes de su uso
import ResetPasswordPage from "./pages/Login/resetPasswordPage";
import ErrorPage from "./errors/not-found/ErrorPage";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/ResetPassword" element={<ResetPasswordPage />} />
          <Route element={<ProtectedLayout />}>
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
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
