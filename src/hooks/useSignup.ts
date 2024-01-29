import React, { useState } from "react";
import axios from "axios";

export default function useSignup(): [Function, string, Object, string] {
  const [status, setStatus] = useState("idle");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const signup = async (email: string, fullName: string, password: string) => {
    setStatus("pending");
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/customer/auth/signup`,
        {
          email,
          fullName,
          password,
        }
      );

      const responseUser = {
        email: response.data.email,
        fullName: response.data.fullName,
        id: response.data.id,
      };

      setUser(responseUser);
      setStatus("resolved");
    } catch (error: any) {
      setError(error.response.data.message);
      setStatus("rejected");
    }
  };

  return [signup, status, user, error];
}
