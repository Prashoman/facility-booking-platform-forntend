import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { currentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { TokenDecoder } from "../../utils/decode";

const AdminPrivateRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(currentToken);
  try {
    const { userRole } = TokenDecoder(token || "");
    if (!token || userRole !== "admin") {
      return <Navigate to="/login" replace />;
    }
  } catch (error) {
    console.error("Token decoding failed:", error);
  }
  return <>{children}</>;
};

export default AdminPrivateRoute;
