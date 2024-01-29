import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useLogin(): [Function, string, Object, string] {
  const [status, setStatus] = useState("idle");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const login = async (email: string, password: string) => {
    setStatus("pending");
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/customer/auth/login`,
        {
          email,
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

  return [login, status, user, error];
}
