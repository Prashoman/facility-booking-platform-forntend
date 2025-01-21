import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { currentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { TokenDecoder } from "../../utils/decode"; // Ensure this utility is correctly implemented

const UserPrivateRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(currentToken);
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  try {
    const {userRole} = TokenDecoder(token);
    if (!userRole || userRole !== "user") {
      return <Navigate to="/login" replace />;
    }
  } catch (error) {
    console.error("Invalid token:", error);

    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default UserPrivateRoute;
