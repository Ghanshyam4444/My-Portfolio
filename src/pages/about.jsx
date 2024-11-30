import React, { useEffect, useState } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

const About = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Ghanshyam Mangla";
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < fullText.length) {
      const timer = setInterval(() => {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 150); // Adjust speed by changing interval time

      return () => clearInterval(timer); // Clean up interval on unmount
    }
  }, [index, fullText]);
  return (
    <>
      <div className="row p-0 mt-lg-5 mt-3 m-0">
        {/* Left Section */}
        <div className="col-lg-8 col-md-12 d-flex flex-column justify-content-center px-4">
          <div>
            <h1 className="intro dynamic-text text-center text-lg-start">
              {text}
            </h1>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-3 col-lg-4 col-md-12 d-flex justify-content-center align-items-center px-4">
          <img
            src="/My-Portfolio/about.jpg"
            className="img-fluid rounded" // Adds rounded corners for aesthetics
            alt="Profile photo of Ghanshyam, Full-Stack Developer"
            style={{ maxWidth: "100%", height: "auto" }} // Maintains responsive scaling
          />
        </div>
      </div>

      <br />
      <div className="container about mt-md-5 mt-lg-1">
        <div className="d-flex justify-content-center ">
          <h2 className="mt-5 mb-3 key-skills m-font">About Me</h2>
        </div>
        <p className="text-dark p-font">
          Hi, I’m Ghanshyam! I recently completed my B.Tech in Computer Science
          & Engineering from Maharshi Dayanand University, and my passion lies
          in full stack development. Over the past few years, I've sharpened my
          problem-solving skills by tackling over 400+ coding problems on
          platforms like LeetCode and CodeStudio. This experience has given me a
          solid grasp of algorithms and data structures, which I love applying
          to real-world projects.
          <br /> I enjoy working on both front-end and back-end development, and
          one of my key projects is "ViewVibe," a full-stack OTT platform
          website that I built from the ground up. It’s a dynamic, user-friendly
          platform that highlights my ability to handle complex web development
          tasks. Recently, I’ve also been working on an online chat application,
          which further demonstrates my ability to create interactive, real-time
          web solutions.
          <br /> I’m always eager to learn new technologies and frameworks, and
          I’m passionate about building scalable and innovative applications.
          Whether it’s developing a sleek user interface or optimizing back-end
          logic, I’m driven to create meaningful digital experiences. Let’s
          connect and bring more exciting ideas to life!
        </p>
      </div>

      <div className="container expertise">
        <div className="d-flex justify-content-center ">
          <h2 className="m-3 key-skills m-font">Expertise</h2>
        </div>
        <p className="text-dark p-font my-1">
          <ul>
            <li className="text-dark">
              <b className="text-dark">
                Programming Languages & Core Concepts :
              </b>{" "}
              C/C++, python, SQL, OOPs, Data Structures & algorithms.
            </li>
            <li className="text-dark mt-1">
              <b className="text-dark">Development Skills :</b> HTML, CSS,
              Bootstrap, Javascript, ReactJs, Responsiveness, SwiperJs, Nodejs,
              ExpressJs, REST API, MongoDB, Mongoose, multer, Socket.io .
            </li>
            <li className="text-dark mt-1">
              <b className="text-dark">Databases :</b> MySQL , MongoDB.
            </li>
            <li className="text-dark mt-1">
              <b className="text-dark">Developer Tools:</b> VSCode , Postman ,
              MongoDB compass, MongoDB atlas, Cloudinary.
            </li>
          </ul>
        </p>
      </div>

      <div className="container achievements">
        <div className="d-flex justify-content-center ">
          <h2 className="m-3 key-skills m-font">Achievements</h2>
        </div>
        <p className="text-dark p-font">
          <ul>
            <li className="text-dark">
              Solved 400+ coding problems across multiple platforms.
            </li>
            <li className="text-dark my-2">
              DSA Specialist Badges – Code Studio :- (14 in DSA Topics) Arrays,
              Backtracking , Binary Search Trees , Binary Trees , Dynamic
              Programming , Hash Table , Heap , Linked List , Recursion ,
              Sorting , Stack & Queue , Trees , Tries .
            </li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default About;
