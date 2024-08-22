import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { useTheme } from "./hooks/useTheme";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotFound from "./components/layout/NotFound";
import About from "./pages/About";

const App: React.FC = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className={`${theme} min-h-screen bg-primary`}>
            <Header />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
