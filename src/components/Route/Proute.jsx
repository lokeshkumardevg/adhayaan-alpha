import React, { useEffect, useState } from "react";
import { useAuth } from "../ContextApi/auth";
import Spinner from "./Spinner";
import { Outlet } from "react-router-dom";
import Spin from "./Spin";

const Proute = () => {
  const { email } = useAuth();
  const [ok, setOk] = useState(false);
  useEffect(() => {
    console.log('===>email privet',email);
    if (email) {
      //   window.location.href = "/";
      setOk(false);
    } else {
      setOk(true);
    }
  }, [email]);
  return ok ? <Outlet /> : <Spin/>;
//   return <div></div>;
};

export default Proute;
