import React from "react";
import LoginForm from "../../components/shared/Forms/LoginForm";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";


const LoginPage = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  const handleSubmit = ( data: { email: string; password: string }) => {
    auth.signin(data.email, () => {
      navigate(from, { replace: true });
    });
  }

  return (
      <LoginForm onSubmit={handleSubmit}  />
  );
};

export default LoginPage;