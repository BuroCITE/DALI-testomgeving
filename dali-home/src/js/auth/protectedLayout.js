import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/dashboard/login" />;
  }

  return <Outlet />
};