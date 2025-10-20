import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <div className="text-center border-t-1 p-10 mt-10 border-gray-400">
      <span>@ {date.getFullYear()} Kiel Bermudez. All rights reserved.</span>
    </div>
  );
};

export default Footer;
