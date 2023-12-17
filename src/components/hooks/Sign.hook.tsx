import { useState } from "react";
import { useSignInMutation, useSignUpMutation } from "../../Store/Sign.api";
import { useNavigate } from "react-router-dom";

type Email = string;
type Pass = string;

interface Error {
  email?: boolean;
  pass?: boolean;
}

const SignHook = () => {
  const navigate = useNavigate();
  const [sign_up] = useSignUpMutation();
  const [sign_in] = useSignInMutation();
  const [error, setError] = useState<Error>({ email: false, pass: false });

  const checkInputs = (email: Email, pass: Pass) => {
    if (email === "") {
      setError({ email: true });
      return;
    }

    if (pass === "") {
      setError({ pass: true });
      return;
    }

    setError({ email: false, pass: false });
  };

  const signUpHandaler = async (email: Email, pass: Pass) => {
    checkInputs(email, pass);
    if (error.email || error.pass) {
      return;
    }

    const response = await sign_up({
      email: email,
      password: pass,
    });

    if ("data" in response) {
      if (response?.data?.token) {
        navigate("/sign-in");
      }
    }
  };

  const signInHandaler = async (email: Email, pass: Pass) => {
    checkInputs(email, pass);
    if (error.email || error.pass) {
      return;
    }

    const response = await sign_in({
      email: email,
      password: pass,
    });

    if ("data" in response) {
      if (response?.data?.token) {
        navigate("/dashboard");
      }
    }
  };

  return { signUpHandaler, signInHandaler, error };
};

export default SignHook;
