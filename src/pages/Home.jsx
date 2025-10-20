import React from "react";
import Header from "../components/Header";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import {
  frontendStack,
  backendStack,
  devTools,
  socialLinks,
  otherDetails,
  projects,
} from "../Data/Static";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import { AiOutlineLink, AiOutlineMail } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FaFlag } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { Link } from "react-router";

const Home = () => {
  return (
    <section className="text-sm tracking-wide leading-6">
      <Header />
      <div className="flex flex-wrap gap-3 lg:grid grid-flow-col content-start grid-rows-1 lg:gap-4 mt-8">
        <div className="grid gap-4 content-start col-span-3 border-1 p-2 rounded-2xl border-gray-300 transition delay-100 duration-150 ease-in-out hover:scale-100 hover:shadow-md">
          <div className="flex items-center gap-2 ">
            <WorkOutlineOutlinedIcon fontSize="small" />
            <b className="text-lg">About</b>
          </div>
          <div className="grid gap-4 content-start text-sm tracking-wide leading-6">
            <p>
              I am a Web Application Developer with 3 years of experience,
              driven by a strong desire to create dynamic and user-friendly web
              applications using various programming languages, libraries, and
              frameworks. I am passionate about continuously learning and
              adapting to new technologies, solving complex problems, and
              developing effective solutions that enhance system performance and
              user experience.{" "}
            </p>
            <p>
              Lately, I’ve been diving deeper into Microservices architecture
              and Service Orchestration, focusing on building scalable and
              modular systems where each service can work independently yet
              communicate seamlessly through APIs or message brokers. I’ve been
              learning how to coordinate multiple services, handle inter-service
              communication that ensure reliability and fault tolerance across
              distributed systems.
            </p>

            <p>
              This exploration also includes working with API Gateways, Docker,
              and service communication patterns, as well as understanding how
              orchestration tools can automate complex workflows.{" "}
            </p>
          </div>
        </div>
        <div className="grid gap-4 col-span-3 border-1 p-2 rounded-2xl border-gray-300 transition delay-100 duration-150 ease-in-out hover:scale-100 hover:shadow-md ">
          <div className="flex items-center gap-2">
            <BiotechOutlinedIcon fontSize="small" />
            <b className="text-lg">Tech Stack</b>
          </div>

          <div className="grid">
            <b>Frontend</b>
            <div className="flex flex-wrap items-center gap-3 mt-3">
              {frontendStack &&
                frontendStack.map((data) => (
                  <span
                    className="border-1 border-gray-300 p-1 rounded-lg text-sm"
                    key={data.id}
                  >
                    {data}
                  </span>
                ))}
            </div>

            <div className="mt-4">
              <b>Backend</b>
              <div className="flex items-center flex-wrap gap-3 mt-3">
                {backendStack &&
                  backendStack.map((data) => (
                    <span
                      className="border-1 border-gray-300 p-1 rounded-lg text-sm"
                      key={data.id}
                    >
                      {data}
                    </span>
                  ))}
              </div>
            </div>

            <div className="mt-4">
              <b>Dev Tools / DevOps</b>
              <div className="flex items-center flex-wrap gap-3 mt-3">
                {devTools &&
                  devTools.map((data) => (
                    <span
                      className="border-1 border-gray-300 p-1 rounded-lg text-sm"
                      key={data.id}
                    >
                      {data}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-5 content-start row-span-2 border-1 p-2 rounded-2xl border-gray-300 transition delay-100 duration-150 ease-in-out hover:scale-100 hover:shadow-md">
          <div className="grid gap-1 content-start">
            <div className="flex items-center gap-2">
              <GradeOutlinedIcon fontSize="small" />
              <b className="text-lg">Experience</b>
            </div>

            <div className="">
              <ul className="list-disc ml-5 grid gap-5">
                <li>
                  <b>Freelance</b>
                  <div className="flex gap-4 justify-between items-end content-start ">
                    <p>
                      Responsible for creating a website depending on what the
                      client wants. I managed to achieve great results.
                      Servicing most contracts from all the clients.{" "}
                    </p>
                    <small className="border-1 rounded-lg border-gray-300 p-1 text-nowrap">
                      2025-Now
                    </small>
                  </div>
                </li>

                <li>
                  <b>Part-time capstone dev | Assisting non government org</b>
                  <div className="flex gap-4 justify-between items-end content-start ">
                    <p>
                      Responsible for analyzing and creating the Project and
                      Design depending on an organization for the website I will
                      make for the client.{" "}
                    </p>
                    <small className="border-1 rounded-lg border-gray-300 p-1 text-nowrap">
                      2022-2025
                    </small>
                  </div>
                </li>

                <li>
                  <b>Hello World!</b>
                  <div className="flex gap-4 justify-between items-end content-start ">
                    <p>Wrote my first line of code </p>
                    <small className="border-1 rounded-lg border-gray-300 p-1 text-nowrap">
                      2020
                    </small>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <SchoolOutlinedIcon fontSize="small" />
              <b className="text-lg">Education</b>
            </div>
            <div className="">
              <ul className="list-disc ml-5 grid gap-5">
                <li>
                  <b>Cavite State University</b>
                  <div className="flex gap-4 justify-between items-end">
                    <p>Bachelor of Science in Information Technology </p>
                    <small className="border-1 rounded-lg border-gray-300 p-1 text-nowrap">
                      2025
                    </small>
                  </div>
                </li>

                <li>
                  <b>Notre Dame of Trece Martires City, Cavite</b>
                  <div className="flex gap-4 justify-between items-end content-start ">
                    <p>
                      Technical-Vocational Livelihood- Information Communication
                      and Technology{" "}
                    </p>
                    <small className="border-1 rounded-lg border-gray-300 p-1 text-nowrap">
                      2018-2020
                    </small>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:grid grid-flow-col grid-rows-1 gap-4 mt-3">
        <div className="col-span-1 p-2 border-1 border-gray-300 rounded-2xl transition delay-100 duration-150 ease-in-out hover:scale-100 hover:shadow-md ">
          <div className="flex items-center gap-2">
            <FeaturedPlayListOutlinedIcon sx={{ fontSize: "15px" }} />
            <b className="text-lg">Beyond Coding</b>
          </div>

          <div className="grid gap-4 mt-3">
            <p>
              Outside of coding, I actively research emerging technologies and
              study how artificial intelligence is developed.
            </p>
            <p>
              I list down the things I learn and share them with my friends and
              fellow developers.
            </p>
          </div>
        </div>

        <div className="grid gap-3 col-span-2 p-2 border-1 border-gray-300 rounded-2xl transition delay-100 duration-150 ease-in-out hover:scale-100 hover:shadow-md">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <AiOutlineProject />
              <b className="text-lg">Recent Projects</b>
            </div>
            <Link to={"all-projects"} className="text-gray-500 text-md">
              View all {">"}{" "}
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 items-start">
            {projects &&
              projects.slice(0, 4).map((data) => (
                <a href={data.link} target="_blank" key={data.id} className="w-full lg:w-70 overflow-hidden">
                  <div className=" grid gap-1 border-1 p-2 rounded-lg border-gray-300 hover:-translate-y-1 hover:transition delay-100 duration-150 ease-in-out hover:shadow-md">
                    <b>{data.title}</b>
                    <span>{data.description}</span>
                    <div className="bg-gray-100 w-max p-1 text-[10px] rounded-lg ">
                      <a target="_blank" href={data.link} className="">
                        {data.linkName}
                      </a>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 items-center border-1 border-gray-300 rounded-2xl p-2 mt-4">
        <div className="grid gap-1 p-2">
          <div className="flex items-center gap-2">
            <AiOutlineLink />
            <span className="font-semibold">Social Links</span>
          </div>
          <div className="grid gap-3 border-gray-300">
            {socialLinks &&
              socialLinks.map((data) => (
                <a href={data.link} target="_blank" key={data.id}>
                  <div className="border-1 border-gray-300 p-1 rounded-lg flex items-center gap-2 cursor-pointer hover:-translate-y-0.5 hover:transition duration-150 ease-in-out">
                    {data.icon}
                    <small className="font-semibold">{data.name}</small>
                  </div>
                </a>
              ))}
          </div>
        </div>

        <div className="grid gap-1  content-start p-2">
          <div className="flex items-center gap-2">
            <HiOutlineInformationCircle />
            <span className="font-semibold">Other Details</span>
          </div>
          <div className="grid gap-3 border-gray-300">
            <div className=" p-1 rounded-lg flex items-center gap-2">
              <AiOutlineMail />
              <small className="font-semibold text-wrap">{otherDetails.email}</small>
            </div>
            <div className="p-1 rounded-lg flex items-center gap-2">
              <BiSolidContact />
              <small className="font-semibold">{otherDetails.contact}</small>
            </div>
            <div className="p-1 rounded-lg flex items-center gap-2">
              <FaFlag />
              <small className="font-semibold">
                {otherDetails.nationality}
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
