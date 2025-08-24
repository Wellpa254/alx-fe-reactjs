import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/pages/BlogPost";
import Login from "./components/pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

// Protected Route Wrapper
function ProtectedRoute({ children }) {
  const isAuthenticated = false; // simulate login
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Dynamic Route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Protected + Nested Routes */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
