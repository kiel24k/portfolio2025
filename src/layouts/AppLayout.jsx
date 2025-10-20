import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className=" m-5 xl:ml-80 xl:mr-80">
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
