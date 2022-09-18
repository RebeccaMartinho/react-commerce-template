import { useContext, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  return !isLoading ? (
    isAuthenticated ? (
      children
    ) : (
      <Navigate to={"/login"} replace={true} />
    )
  ) : (
    <>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
    </>
  );
};
