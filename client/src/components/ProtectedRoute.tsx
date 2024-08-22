import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { session } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (!session) {
      navigate("/login");
    } else setLoading(false);
  }, [session, navigate]);

  if (loading) return null;

  return session ? children : null;
};

export default ProtectedRoute;
