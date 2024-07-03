import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";
import Login from "./Login";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-gray-30);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1 is load the authenticated user
  const { isLoading, isAuthenticated } = useUser();
  // if there is no authenticated user back to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 2 loading the spinner if is loading
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
