import { useEffect } from "react";
import { login } from "../../../services/preLogin";

export const PublicHome = () => {
  useEffect(() => {
    login({
      email: "test@test.com",
      password: "password",
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, []);
  return <div></div>;
};
