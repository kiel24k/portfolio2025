import { Button } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import React from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const Header = () => {
  return (
    <div className="mt-10">
      <div className="flex gap-4">
        <figure>
          <img
            src="/public/mygradpic.jpg"
            alt=""
            className="w-45 h-40 rounded-2xl"
          />
        </figure>

        <div className="grid content-start gap-2 w-full">
          <div className="grid content-start ">
            <h1 className="font-bold text-3xl">Kiel Bermudez</h1>
            <div className="flex items-center gap-1">
              <FmdGoodOutlinedIcon fontSize="small"  />
              <span className="font-semibold">Tanza Cavite, Philippines</span>
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <span className="text-lg font-semibold text-gray-500">
             Web Application Developer
            </span>
          </div>

          <div className="flex items-center">
         <a href="mailto:kielbermudez200104@gmail.com">
             <Button
              variant="outlined"
              color="none"
              size="small"
              sx={{ textTransform: "none", borderRadius: "8px" }}
              startIcon={<EmailOutlinedIcon />}
            >
              Send email
            </Button>
         </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
