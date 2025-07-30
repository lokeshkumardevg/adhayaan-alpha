import React from "react";

import { Toaster } from "react-hot-toast";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
        <Toaster />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
