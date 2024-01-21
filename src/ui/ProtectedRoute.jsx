import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";
import Loader from "./Loader";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();
  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isLoading, isAuthenticated, navigate]
  );
  // 3. Show spinner while loading
  if (isLoading)
    return (
      <div className=" h-screen bg-stone-900 grid place-items-center">
        <Loader />
      </div>
    );

  // 4. If there IS an authenticated user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
