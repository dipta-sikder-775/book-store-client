import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { email } = useAppSelector((state) => state.user);
  const location = useLocation();

  if (email) {
    return children;
  }

  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
