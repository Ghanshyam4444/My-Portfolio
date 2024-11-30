import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
const Projects = () => {
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

  // const Social_media_website_description = `this is only like a prototype`;
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
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-lg-11 col-md-12">
            <div className="card mb-4 border-0 shadow">
              <div className="row g-0 align-items-center">
                <div className="col-md-5 mb-lg-0 mb-md-0 mb-3">
                  <NavLink
                    to="/project_detail"
                    onClick={(e) => {
                      setDescription(Social_media_website_description);
                      setImages(Social_media_website_images);
                    }}
                  >
                    <img
                      src="/My-Portfolio/social_media.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ border: "1px solid cyan" }}
                    />
                  </NavLink>
                </div>
                <div className="col-md-5 px-lg-3 px-md-3 px-0">
                  <h5 className="mb-3 text-dark m-font mt-3">
                    Social media website
                  </h5>
                  <div className="mb-3">
                    <div className="features px-3 mt-4">
                      <h6 style={{ color: "black" }} className="ms-1 mb-3">
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
                        Socket.io
                      </span>
                      <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                        etc.
                      </span>
                    </div>
                    <div className="mt-2">
                      <a
                        href="https://social-media-frontend-neon.vercel.app/"
                        style={{
                          textDecoration: "none",
                        }}
                        className="p-font text-primary"
                      >
                        Link : https://social-media-frontend-neon.vercel.app/
                      </a>
                    </div>
                    <p className="px-3 mt-2 h-font" style={{ color: "black" }}>
                      Dur : AUG 2024 - NOV 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-11 col-md-12">
            <div className="card mb-4 border-0 shadow">
              <div className="row g-0 align-items-center">
                <div className="col-md-5 mb-lg-0 mb-md-0 mb-3">
                  <NavLink
                    to="/project_detail"
                    onClick={(e) => {
                      setDescription(chat_website_description);
                      setImages(chat_website_images);
                    }}
                  >
                    <img
                      src="/My-Portfolio/livechat_app.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ border: "1px solid cyan" }}
                    />
                  </NavLink>
                </div>
                <div className="col-md-5 px-lg-3 px-md-3 px-0">
                  <h5 className="mb-3 text-dark m-font">
                    online chatting application
                  </h5>
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
                        Socket.io
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
                    <div className="mt-2">
                      <a
                        href="https://github.com/Ghanshyam4444/Chat-application"
                        style={{
                          color: "hsla(35, 87%, 49%, 1)",
                          textDecoration: "none",
                        }}
                      >
                        GitHub Link : Chat Web application
                      </a>
                    </div>
                    <p className="px-3 mt-2 h-font" style={{ color: "black" }}>
                      Dur : MAY 2024 - JUL 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-11 col-md-12">
            <div className="card mb-4 border-0 shadow">
              <div className="row g-0 align-items-center">
                <div className="col-md-5 mb-lg-0 mb-md-0 mb-3">
                  <NavLink
                    to="/project_detail"
                    onClick={(e) => {
                      setDescription(view_vibe_description);
                      setImages(view_vibe_images);
                    }}
                  >
                    <img
                      src="/My-Portfolio/movie_logo.avif"
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ border: "1px solid cyan" }}
                    />
                  </NavLink>
                </div>
                <div className="col-md-5 px-lg-3 px-md-3 px-0">
                  <h5 className="mb-3 text-dark m-font">
                    OTT platform website (ViewVibe)
                  </h5>
                  <div className="mb-3">
                    <div className="features px-3 mt-4">
                      <h6 style={{ color: "black" }} className="ms-1 mb-3">
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
                        MongoDb Atlas
                      </span>
                      <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                        Mongoose
                      </span>
                      <span className="m-1 badge rounded-pill bg-light text-dark text-wrap ">
                        etc.
                      </span>
                    </div>
                    <div className="mt-2">
                      <a
                        href="https://github.com/Ghanshyam4444/OTT-platform-website"
                        style={{
                          color: "hsla(35, 87%, 49%, 1)",
                          textDecoration: "none",
                        }}
                      >
                        GitHub Link : View Vibe Project
                      </a>
                    </div>
                    <p className="px-3 mt-2 h-font" style={{ color: "black" }}>
                      Dur : JAN 2024 - APR 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-11 col-md-12">
            <div className="card mb-4 border-0 shadow">
              <div className="row g-0 align-items-center">
                <div className="col-md-5 mb-lg-0 mb-md-0 mb-3">
                  <img
                    src="/My-Portfolio/e-com-bharat.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                    style={{ border: "1px solid cyan" }}
                  />
                </div>
                <div className="col-md-5 px-lg-3 px-md-3 px-0">
                  <h5 className="mb-3 text-dark m-font">E-commerce website</h5>
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
                        etc.
                      </span>
                    </div>
                    <a
                      href="https://github.com/Ghanshyam4444/E_mart"
                      style={{
                        color: "hsla(35, 87%, 49%, 1)",
                        textDecoration: "none",
                      }}
                    >
                      GitHub Link : E-mart website
                    </a>
                    <p className="px-3 mt-4 h-font" style={{ color: "black" }}>
                      Dur : SEP 2023 - DEC 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-11 col-md-12">
            <div className="card mb-4 border-0 shadow">
              <div className="row g-0 align-items-center">
                <div className="col-md-5 mb-lg-0 mb-md-0 mb-3">
                  <img
                    src="/My-Portfolio/room-booking-logo.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                    style={{ border: "1px solid cyan" }}
                  />
                </div>
                <div className="col-md-5 px-lg-3 px-md-3 px-0">
                  <h5 className="mb-3 text-dark m-font">
                    Hotel booking website
                  </h5>
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
                        etc.
                      </span>
                    </div>
                    <a
                      href="https://github.com/Ghanshyam4444/room-booking-website-of-a-hotel"
                      style={{
                        color: "hsla(35, 87%, 49%, 1)",
                        textDecoration: "none",
                      }}
                    >
                      GitHub Link : Room Booking Website
                    </a>
                    <p className="px-3 mt-4 h-font" style={{ color: "black" }}>
                      Dur : MAR 2023 - JUNE 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-11 col-md-12">
            <div className="card mb-4 border-0 shadow">
              <div className="row g-0 align-items-center">
                <div className="col-md-5 mb-lg-0 mb-md-0 mb-3">
                  <img
                    src="/My-Portfolio/portfolio2.avif"
                    className="img-fluid rounded-start"
                    alt="..."
                    style={{ border: "1px solid cyan" }}
                  />
                </div>
                <div className="col-md-5 px-lg-3 px-md-3 px-0">
                  <h5 className="mb-3 text-dark m-font">My Portfolio</h5>
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
                        etc.
                      </span>
                    </div>
                    <p
                      className="px-3 mt-4 h-font"
                      style={{ color: "black" }}
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
