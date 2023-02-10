import { Navigate, useLoaderData, useOutlet, Await } from "react-router-dom";
import { useAuth } from "./useAuth";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      {outlet}
    </div>
  );
};
