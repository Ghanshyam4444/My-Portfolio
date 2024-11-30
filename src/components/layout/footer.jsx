import React from "react";
import "./footer.css"; // Ensure this contains necessary responsive styles if needed
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark mt-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 p-4">
            <h3 className="h-font fw-bold fs-4">About me</h3>
            <p className="text-white">
              "Hi, I'm Ghanshyam, a Full-Stack Developer who thrives on creating
              dynamic, user-centric web applications. From front-end design to
              back-end functionality, I build scalable and efficient solutions
              that deliver seamless digital experiences."
            </p>
          </div>
          <div className="col-lg-3 col-md-6 p-4">
            <h5 className="mb-3 text-white">Links</h5>
            <a
              href="https://www.linkedin.com/in/ghanshyam-mangla-7511392a0/"
              className="d-inline-block mb-1 text-decoration-none"
            >
              LinkedIn
            </a>
            <br />
            <a
              href="https://www.naukri.com/code360/profile/e47c2e9c-ac05-4121-928c-40ec7fc8bfb6"
              className="d-inline-block mb-1 text-decoration-none"
            >
              CodeStudio
            </a>
            <br />
            <a
              href="https://leetcode.com/u/Ghanshyam4444/"
              className="d-inline-block mb-1 text-decoration-none"
            >
              LeetCode
            </a>
            <br />
            <a
              href="https://github.com/Ghanshyam4444"
              className="d-inline-block mb-1 text-decoration-none"
            >
              GitHub
            </a>
            <br />
            <a
              href="https://www.instagram.com/mangla.ghanshyam/"
              className="d-inline-block text-decoration-none"
            >
              Instagram
            </a>
            <br />
            <br />
          </div>
          <div className="col-lg-3 col-md-6 p-4">
            <h5 className="mb-3 text-white">Contact Us</h5>
            <a
              href="tel:+9034040304"
              className="d-inline-block text-decoration-none mb-2"
            >
              <i className="bi bi-telephone me-2"></i>9034040304
            </a>
            <br />
            <a
              href="mailto:ghanshyammangla15@gmail.com"
              className="d-inline-block text-decoration-none mb-2"
            >
              <i className="bi bi-envelope me-2"></i>Email
            </a>
          </div>
          <div className="col-lg-2 col-md-6 p-4">
            <h5 className="mb-3">Follow us</h5>
            <a
              href="https://www.facebook.com/profile.php?id=100022346324168"
              className="d-inline-block text-decoration-none mb-2"
            >
              <i className="bi bi-facebook me-2"></i>Facebook
            </a>
            <br />
            <a
              href="https://www.instagram.com/mangla.ghanshyam/"
              className="d-inline-block text-decoration-none mb-2"
            >
              <i className="bi bi-instagram me-2"></i>Instagram
            </a>
          </div>
        </div>
      </div>
      <h6 className="text-center bg-dark text-white pb-3 m-0">
        Designed and Developed by - GHANSHYAM MANGLA
      </h6>
    </>
  );
};

export default Footer;
