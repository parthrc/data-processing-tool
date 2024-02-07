import { useNavigate, useNavigation } from "react-router-dom";
import { useCurrentUser } from "../features/Auth/useCurrentUser.jsx";
import Spinner from "./Spinner.jsx";
import { useEffect } from "react";
import styled from "styled-components";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1. Laod authenticated user

  const { isFetchingCurrentUser, isAuthenticated } = useCurrentUser();

  //3. If no authenticated user, redirect to login page
  useEffect(
    function () {
      if (!isAuthenticated && !isFetchingCurrentUser) navigate("/login");
    },
    [isAuthenticated, isFetchingCurrentUser, navigate]
  );

  //2. Show spinner while loading
  if (isFetchingCurrentUser)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. If there is user, render children
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
