import React from "react";
import { MdArrowBack } from "react-icons/md";
import { projects } from "../Data/Static";
import { Avatar, Button, Stack } from "@mui/material";
const AllProjects = () => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <div>
      <div className="flex items-center  gap-3">
        <Button
          startIcon={<MdArrowBack />}
          sx={{ textTransform: "none", color: "black", background: "none" }}
          onClick={handleBack}
        >
          Back To Home
        </Button>
        <b className="text-2xl">All Projects</b>
      </div>

      <section>
        <div className="flex flex-wrap gap-4 mt-10">
          {projects &&
            projects.map((data) => (
              <a
                href={data.link}
                target="_blank"
                className="w-full lg:w-100 overflow-hidden"
              >
                <div className=" col-span-3 grid gap-1 border-1 p-2 rounded-lg border-gray-300 hover:-translate-y-1 hover:transition delay-100 duration-150 ease-in-out hover:shadow-md">
                  <b>{data.title}</b>
                  <span>{data.description}</span>
                  <div className="bg-gray-100 w-max p-1 text-[10px] rounded-lg ">
                    <a target="_blank" href={data.link} className="">
                      {data.linkName}
                    </a>
                  </div>
                  <div className="flex gap-3">{data.tools}</div>
                  {data.video && (
                    <video height={120} autoPlay muted>
                      <source src={data.video}  />
                    </video>
                  )}
                </div>
              </a>
            ))}
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
