import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import FormButton from "../../base/Button";
import {
  HStack,
  StyledFiller,
  StyledHeading4,
  StyledHeading5,
  StyledHeading5W,
  VStack,
} from "../../shared/AppStyles";

interface AuthStatusProps {
  header?: boolean;
}

function AuthStatus({ header = false }: AuthStatusProps) {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogOut = () => {
    auth.signout(() => navigate("/"));
  };

  if (!auth.user) {
    return header ? (
      <HStack.rowg1>
        <FormButton
          label="LogIn"
          type="button"
          variant="danger"
          onClick={handleLogin}
        />
      </HStack.rowg1>
    ) : (
      <VStack.col>
        <StyledFiller/>
        <h1>Gaana.com</h1>
        <FormButton
          label="LogIn"
          type="button"
          variant="danger"
          onClick={handleLogin}
        />
      </VStack.col>
    );
  }

  return (
    <HStack.rowg1>
      {header ? (
        <>
          <StyledHeading5W>Welcome {auth.user}!</StyledHeading5W>
          <FormButton
            label="LogOut"
            type="button"
            variant="secondary"
            onClick={handleLogOut}
          />
        </>
      ) : (
        <div>
          <StyledFiller/>
          <StyledHeading4>Welcome {auth.user}!</StyledHeading4>
          <Link to="/player">Play Music</Link>
        </div>
      )}
    </HStack.rowg1>
  );
}

export default AuthStatus;
