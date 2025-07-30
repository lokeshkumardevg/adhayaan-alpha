import React, { useEffect, useState } from "react";
import { useAuth } from "../ContextApi/auth";
import { Outlet } from "react-router-dom";
import Spinner from "./Spinner";

const PrivetRoute = () => {
  //   const [email] = useState(localStorage.getItem('getStartedEmail'));
  const { email } = useAuth();
  const [ok, setOk] = useState(false);
  useEffect(() => {
    console.log('===>email privet',email);
    if (email) {
      //   window.location.href = "/";
      setOk(true);
    } else {
      setOk(false);
    }
  }, [email]);
  return ok ? <Outlet /> : <Spinner/>;
};

export default PrivetRoute;
