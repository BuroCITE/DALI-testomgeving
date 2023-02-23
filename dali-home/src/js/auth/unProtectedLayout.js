import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";

export const UnProtectedLayout = () => {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" />;
  }

  return <Outlet />
};