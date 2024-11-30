import React, { useState, useEffect } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

const Home = () => {
  const [text, setText] = useState(""); // Holds the current text being displayed
  const fullText = "Hi, I'm Ghanshyam"; // The full text
  const [index, setIndex] = useState(0); // To track the position of the current letter

  const { setImages, setDescription } = useAuth();
  const view_vibe_description = `
I. Admin Panel:
<br/>
- Administered user accounts (view, add, edit, delete), improving efficiency and reducing management time by 20%.<br/>
- Streamlined message management (view all, view details, delete), ensuring accurate communication records with 98% integrity.<br/>
- Managed content for movies and web series (add, view, edit, delete), keeping listings current and boosting engagement by 15%.<br/>
<br/>
II. User Panel:
<br/>
- Secured content access after login, enhancing security and increasing engagement by 90%.<br/>
- Restricted premium content for unsubscribed users, driving a 75% increase in subscriptions.<br/>
- Introduced a search feature, boosting content discoverability by 99%.<br/>
- Delivered personalized content suggestions, increasing user interaction by 95%.<br/>
`;

  const chat_website_description = `• Engineered real-time messaging with Socket.io, ensuring instant delivery between users and reducing latency by 99%.<br/>
• Enabled real-time typing indicators and instant notifications, enhancing user responsiveness by 95%.<br/>
• Developed group chat functionality with admin privileges (adding/removing users, updating group names), streamlining management 
by 30%.<br/>
• Facilitated profile photo uploads, improving user identification and personalization, resulting in a 25% increase in engagement.`;
  const view_vibe_images = [
    "ViewVibeProjectImages/Screenshot327.png",
    "ViewVibeProjectImages/Screenshot328.png",
    "ViewVibeProjectImages/Screenshot329.png",
    "ViewVibeProjectImages/Screenshot313.png",
    "ViewVibeProjectImages/Screenshot314.png",
    "ViewVibeProjectImages/Screenshot321.png",
    "ViewVibeProjectImages/Screenshot322.png",
    "ViewVibeProjectImages/Screenshot323.png",
    "ViewVibeProjectImages/Screenshot324.png",
    "ViewVibeProjectImages/Screenshot325.png",
    "ViewVibeProjectImages/Screenshot326.png",
    "ViewVibeProjectImages/Screenshot315.png",
    "ViewVibeProjectImages/Screenshot316.png",
    "ViewVibeProjectImages/Screenshot317.png",
    "ViewVibeProjectImages/Screenshot318.png",
    "ViewVibeProjectImages/Screenshot319.png",
    "ViewVibeProjectImages/Screenshot320.png",
  ];
  const chat_website_images = [
    "chat-website-images/Screenshot324.png",
    "chat-website-images/Screenshot325.png",
    "chat-website-images/Screenshot326.png",
    "chat-website-images/Screenshot327.png",
    "chat-website-images/Screenshot328.png",
    "chat-website-images/Screenshot329.png",
    "chat-website-images/Screenshot330.png",
    "chat-website-images/Screenshot331.png",
    "chat-website-images/Screenshot332.png",
  ];
  const Social_media_website_description = `

Real-Time Chatting:
- Seamless real-time messaging with instant delivery.
- Features include typing indicators and read receipts.
- Instant message notifications for uninterrupted communication.
<br/>
<br/>
Dynamic Notifications:
- Receive real-time alerts for friend requests and new followers.
- Stay updated without refreshing the app.
<br/>
<br/>
Media Sharing and Management:
- Upload and share images and videos effortlessly.
- Advanced options to edit or delete your media anytime.
- Engage with content through likes, comments, and saves.
<br/>
<br/>
User Discovery:
- Search for people by name, username, or interests.
- Personalized user suggestions to grow your network.
<br/>
<br/>
Interactive Features:
- Like, comment, and save others' posts to express yourself.
- Build meaningful interactions through engaging content.
<br/>
<br/>
Smart and Intuitive Design:
- A user-friendly interface for smooth navigation.
- Optimized for fast loading and hassle-free use.
`;

  const Social_media_website_images = [
    "social_media_website/Screenshot (361).png",
    "social_media_website/Screenshot (362).png",
    "social_media_website/Screenshot (363).png",
    "social_media_website/Screenshot (364).png",
    "social_media_website/Screenshot (365).png",
    "social_media_website/Screenshot (366).png",
    "social_media_website/Screenshot (367).png",
    "social_media_website/Screenshot (368).png",
    "social_media_website/Screenshot (391).png",
    "social_media_website/Screenshot (369).png",
    "social_media_website/Screenshot (370).png",
    "social_media_website/Screenshot (371).png",
    "social_media_website/Screenshot (372).png",
    "social_media_website/Screenshot (373).png",
    "social_media_website/Screenshot (376).png",
    "social_media_website/Screenshot (377).png",
    "social_media_website/Screenshot (378).png",
    "social_media_website/Screenshot (379).png",
    "social_media_website/Screenshot (380).png",
    "social_media_website/Screenshot (381).png",
    "social_media_website/Screenshot (382).png",
    "social_media_website/Screenshot (383).png",
    "social_media_website/Screenshot (384).png",
    "social_media_website/Screenshot (385).png",
    "social_media_website/Screenshot (386).png",
    "social_media_website/Screenshot (387).png",
    "social_media_website/Screenshot (388).png",
    "social_media_website/Screenshot (389).png",
    "social_media_website/Screenshot (390).png",
  ];

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
        <div className="col-lg-8 col-md-12 d-flex flex-column justify-content-center align-items-start px-4">
          <h1 className="intro dynamic-text text-center">{text}</h1>
          <p
            className="mt-3 h-font text-center text-lg-start"
            style={{ color: "black" }}
          >
            Hi, I'm Ghanshyam, a Full-Stack Developer who thrives on creating
            dynamic, user-centric web applications. From front-end design to
            back-end functionality, I build scalable and efficient solutions
            that deliver seamless digital experiences.
          </p>
        </div>

        {/* Right Section */}
        <div className="col-lg-4 col-md-12 d-flex justify-content-center align-items-center px-4">
          <img
            src="/My-Portfolio/about.jpg"
            className="img-fluid rounded" // Rounded corners for better aesthetics
            alt="Profile photo of Ghanshyam, Full-Stack Developer"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>

      <br />
      <br />
      <br />
      <div className="row p-0 m-0 mt-md-5 mt-lg-1">
        <div className="col-12 d-flex flex-column align-items-center">
          <div className="d-flex justify-content-center">
            <h2 className="my-4 key-skills m-font">Brief Introduction</h2>
          </div>
          <p className="mx-5 brief-intro h-font">
            I am a highly dynamic and skilled computer engineering student who
            possesses a keen sense of creativity and a unique talent for finding
            innovative solutions to complex challenges. I embrace difficult
            situations with a positive mindset, leveraging failures as learning
            opportunities. As a lifelong learner, I am always looking for new
            opportunities to grow and develop my skills. I am confident that I
            can make a significant contribution to any team.
          </p>
        </div>
      </div>

      <br />
      {/* ////////////////////////Skills/////////////////////////////// */}
      <div className="container">
        <div className="d-flex justify-content-center ">
          <h2 className="m-3 key-skills m-font">Key Skills</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 my-3">
            <div
              className="card border-0 shadow"
              style={{ maxWidth: "350px", margin: "auto" }}
            >
              <img
                height={"200px"}
                src="/My-Portfolio/skills/html_logo.png"
                className="card-img-top"
                style={{ border: "1px solid cyan" }}
              />
              <div className="card-body d-flex flex-column align-items-center">
                <h5>HTML</h5>
                <p className="p-font" style={{ color: "black" }}>
                  HyperText Markup Language
                </p>
              </div>
              <div>
                <p className="px-4 h-font" style={{ color: "black" }}>
                  HyperText refers to the linking of text or multimedia over the
                  web.
                </p>
                <p className="px-4 p-2 h-font" style={{ color: "black" }}>
                  Markup Language means it uses tags to structure and format the
                  content on web pages.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-3">
            <div
              className="card border-0 shadow"
              style={{ maxWidth: "350px", margin: "auto" }}
            >
              <img
                height={"200px"}
                src="/My-Portfolio/css_badge.jpg"
                className="card-img-top"
                style={{ border: "1px solid cyan" }}
              />
              <div className="card-body d-flex flex-column align-items-center">
                <h5>CSS</h5>
                <p className="p-font" style={{ color: "black" }}>
                  Cascading Style Sheets
                </p>
              </div>
              <div>
                <p className="px-4 h-font" style={{ color: "black" }}>
                  CSS: The Language for Styling Web Pages
                </p>
                <p className="px-4 h-font" style={{ color: "black" }}>
                  Enhancing User Experience through Visual Presentation
                </p>
                <p className="px-4 h-font" style={{ color: "black" }}>
                  CSS: Crafting Visually Stunning and Responsive Web Designs
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-3">
            <div
              className="card border-0 shadow"
              style={{ maxWidth: "350px", margin: "auto" }}
            >
              <img
                height={"200px"}
                src="/My-Portfolio/skills/JavaScript-Symbol.png"
                className="card-img-top"
                style={{ border: "1px solid cyan" }}
              />
              <div className="card-body d-flex flex-column align-items-center">
                <h5>JavaScript</h5>
                <p className="p-font" style={{ color: "black" }}></p>
              </div>
              <div>
                <p className="px-4 h-font" style={{ color: "black" }}>
                  JavaScript: The Essential Core Language for Modern Web
                  Development
                </p>
                <p className="px-4 h-font" style={{ color: "black" }}>
                  Empowering Interactive and Dynamic Experiences in Modern Web
                  Applications
                </p>
                <p className="px-4 h-font" style={{ color: "black" }}>
                  Transforming Static Websites into Engaging, User-Friendly
                  Applications
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 text-center mt-5">
            <NavLink
              to="/keyskills"
              className="btn btn-sm btn-outline-dark rounded-0 fw-bold shadow-none"
            >
              More Skills
            </NavLink>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* ////////////////////////Education/////////////////////////////// */}
      <div className="container">
        <div className="d-flex justify-content-center ">
          <h2 className="mb-2 key-skills m-font">Education</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 my-3">
            <div
              className="card border-0 shadow"
              style={{ maxWidth: "350px", margin: "auto" }}
            >
              <img
                height={"200px"}
                src="/My-Portfolio/btech_logo1.jpg"
                className="card-img-top"
                style={{ border: "1px solid cyan" }}
              />
              <div className="card-body d-flex flex-column align-items-center">
                <h5>B.tech</h5>
                <p className="p-font" style={{ color: "black" }}>
                  Computer Science and Engineering
                </p>
              </div>
              <div>
                <p className="px-4 h-font" style={{ color: "black" }}>
                  Per : 80.3%
                </p>
                <p className="px-4 h-font" style={{ color: "black" }}>
                  Dur : 2021-2024
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-3">
            <div
              className="card border-0 shadow"
              style={{ maxWidth: "350px", margin: "auto" }}
            >
              <img
                height={"200px"}
                src="/My-Portfolio/diploma_logo.jpg"
                className="card-img-top"
                style={{ border: "1px solid cyan" }}
              />
              <div className="card-body d-flex flex-column align-items-center">
                <h5>Diploma</h5>
                <p className="p-font" style={{ color: "black" }}>
                  Computer Science and Engineering
                </p>
              </div>
              <div>
                <p className="px-4 h-font" style={{ color: "black" }}>
                  Per : 83.53%
                </p>
                <p className="px-4 h-font" style={{ color: "black" }}>
                  Dur : 2019-2021
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-3">
            <div
              className="card border-0 shadow"
              style={{ maxWidth: "350px", margin: "auto" }}
            >
              <img
                height={"200px"}
                src="/My-Portfolio/12thclass_logo.png"
                className="card-img-top"
                style={{ border: "1px solid cyan" }}
              />
              <div className="card-body d-flex flex-column align-items-center">
                <h5>12th</h5>
                <p className="p-font" style={{ color: "black" }}>
                  Non Medical
                </p>
              </div>
              <div>
                <p className="px-4 h-font" style={{ color: "black" }}>
                  Per : 76.4%
                </p>
                <p className="px-4 h-font" style={{ color: "black" }}>
                  Dur : 2017-2019
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 text-center mt-5">
            <NavLink
              to="/education"
              className="btn btn-sm btn-outline-dark rounded-0 fw-bold shadow-none"
            >
              More Details
            </NavLink>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* ////////////////////////Projects/////////////////////////////// */}
      <div className="container">
        <div className="d-flex justify-content-center ">
          <h2 className="mb-2 key-skills m-font">Projects</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 my-3">
            <div
              className="card border-0 shadow"
              style={{ maxWidth: "350px", margin: "auto" }}
            >
              <NavLink
                to="/project_detail"
                onClick={(e) => {
                  setDescription(view_vibe_description);
                  setImages(view_vibe_images);
                }}
              >
                <img
                  height={"200px"}
                  src="/My-Portfolio/movie_logo.avif"
                  className="card-img-top"
                  style={{ border: "1px solid cyan" }}
                />
              </NavLink>
              <div className="card-body d-flex flex-column align-items-center">
                <h5>ViewVibe</h5>
                <p className="p-font" style={{ color: "black" }}>
                  OTT platform website
                </p>
              </div>
              <div>
                <div className="features px-3">
                  <h6 style={{ color: "black" }} className="ms-1 mb-2">
                    Key Skills
                  </h6>
                  <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                    HTML
                  </span>
                  <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                    CSS
                  </span>
                  <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                    Bootstrap
                  </span>
                  <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                    JavaScript
                  </span>
                  <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                    SwiperJs
                  </span>
                  <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                    ReactJs
                  </span>
                  <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                    Nodejs
                  </span>
                  <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                    ExpressJs
                  </span>
                  <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                    REST API
                  </span>
                  <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                    MongoDB
                  </span>
                  <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                    Mongoose
                  </span>
                  <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                    MongoDb Atlas
                  </span>
                  <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                    etc.
                  </span>
                </div>
                <p className="px-3 mt-2 h-font" style={{ color: "black" }}>
                  Dur : JAN 2024 - APR 2024
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-3">
            <div
              className="card border-0 shadow"
              style={{ maxWidth: "350px", margin: "auto" }}
            >
              <NavLink
                to="/project_detail"
                onClick={(e) => {
                  setDescription(chat_website_description);
                  setImages(chat_website_images);
                }}
              >
                <img
                  height={"200px"}
                  src="/My-Portfolio/live-chat-icon-with-speech-bubble-support-service_349999-1230.avif"
                  className="card-img-top"
                  style={{ border: "1px solid cyan" }}
                />
              </NavLink>
              <div className="card-body d-flex flex-column align-items-center">
                <h5>Talk-To-Friend</h5>
                <p className="p-font" style={{ color: "black" }}>
                  online chatting applicaion
                </p>
              </div>
              <div>
                <div>
                  <div className="features px-3">
                    <h6 style={{ color: "black" }} className="ms-1 mb-2">
                      Key Skills
                    </h6>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      HTML
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      CSS
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      Bootstrap
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      JavaScript
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      SwiperJs
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      ReactJs
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      Nodejs
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      ExpressJs
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      REST API
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      MongoDB
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      Mongoose
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      Cloudinary
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      MongoDb Atlas
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      etc.
                    </span>
                  </div>
                  <p className="px-3 mt-2 h-font" style={{ color: "black" }}>
                    Dur : MAY 2024 - JUL 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-3">
            <div
              className="card border-0 shadow"
              style={{ maxWidth: "350px", margin: "auto" }}
            >
              <NavLink
                to="/project_detail"
                onClick={(e) => {
                  setDescription(Social_media_website_description);
                  setImages(Social_media_website_images);
                }}
              >
                <img
                  height={"200px"}
                  src="/My-Portfolio/social_media.jpg"
                  className="card-img-top"
                  style={{ border: "1px solid cyan" }}
                />
              </NavLink>
              <div className="card-body d-flex flex-column align-items-center">
                <h5>MediaHaven</h5>
                <p className="p-font" style={{ color: "black" }}>
                  Social Media Website
                </p>
              </div>
              <div>
                <div>
                  <div className="features px-3">
                    <h6 style={{ color: "black" }} className="ms-1 mb-2">
                      Key Skills
                    </h6>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      HTML
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      CSS
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      Bootstrap
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      JavaScript
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      ReactJs
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      Nodejs
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      ExpressJs
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      REST API
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      MongoDB
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      Mongoose
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      multer
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      Cloudinary
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      MongoDb Atlas
                    </span>
                    <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                      etc.
                    </span>
                  </div>
                  <p className="px-3 mt-2 h-font" style={{ color: "black" }}>
                    Dur : AUG 2024 - NOV 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 text-center mt-5">
            <NavLink
              to="/projects"
              className="btn btn-sm btn-outline-dark rounded-0 fw-bold shadow-none"
            >
              More projects
            </NavLink>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
