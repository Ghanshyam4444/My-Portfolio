import React, { useEffect, useState } from "react";
import "./Contact.css";
const Contact = () => {
  const [text, setText] = useState("");
  const fullText = "Get in Touch";
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
      <div className="row p-0 mt-lg-5 mt-3 m-0 small-screen-spacing">
        {/* Left Section */}
        <div className="col-lg-8 col-md-12 d-flex flex-column justify-content-center px-4">
          <h1 className="intro dynamic-text text-center text-lg-start">
            Contact
          </h1>
          <h1 className="intro dynamic-text text-center text-lg-start">
            {text}
          </h1>
        </div>

        {/* Right Section */}
        <div className="mt-3 col-lg-4 col-md-12 d-flex justify-content-center align-items-center px-4">
          <img
            src="/My-Portfolio/about.jpg"
            className="img-fluid rounded" // Adds rounded corners for a polished look
            alt="myprofilephoto"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>

      <br />
      <div className="container mt-md-5 mt-lg-1">
        <div className="d-flex justify-content-center">
          <h2 className="mt-5 mb-3 key-skills m-font">
            My Coding & Professional Profiles
          </h2>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <ul className="prof_links list-unstyled text-dark p-font mt-2">
              <li className="text-dark m-1">
                <a
                  href="https://www.naukri.com/code360/profile/e47c2e9c-ac05-4121-928c-40ec7fc8bfb6"
                  className="link-custom"
                  style={{
                    color: "hsla(35, 87%, 49%, 1)",
                    textDecoration: "none",
                  }}
                >
                  <b className="text-dark">Code Studio : </b>
                  <span
                    style={{
                      color: "hsla(35, 87%, 49%, 1)",
                      textDecoration: "none",
                    }}
                  >
                    https://www.naukri.com/code360/profile/e47c2e9c-ac05-4121-928c-40ec7fc8bfb6
                  </span>
                </a>
              </li>
              <li className="text-dark m-1">
                <a
                  href="https://leetcode.com/u/Ghanshyam4444/"
                  className="link-custom"
                  style={{
                    color: "hsla(35, 87%, 49%, 1)",
                    textDecoration: "none",
                  }}
                >
                  <b className="text-dark">LeetCode : </b>
                  <span
                    style={{
                      color: "hsla(35, 87%, 49%, 1)",
                      textDecoration: "none",
                    }}
                  >
                    https://leetcode.com/u/Ghanshyam4444/
                  </span>
                </a>
              </li>
              <li className="text-dark m-1">
                <a
                  href="https://github.com/Ghanshyam4444"
                  className="link-custom"
                  style={{
                    color: "hsla(35, 87%, 49%, 1)",
                    textDecoration: "none",
                  }}
                >
                  <b className="text-dark">GitHub : </b>
                  <span
                    style={{
                      color: "hsla(35, 87%, 49%, 1)",
                      textDecoration: "none",
                    }}
                  >
                    https://github.com/Ghanshyam4444
                  </span>
                </a>
              </li>
              <li className="text-dark m-1">
                <a
                  href="https://www.linkedin.com/in/ghanshyam-mangla-7511392a0/"
                  className="link-custom"
                  style={{
                    color: "hsla(35, 87%, 49%, 1)",
                    textDecoration: "none",
                  }}
                >
                  <b className="text-dark">LinkedIn : </b>
                  <span
                    style={{
                      color: "hsla(35, 87%, 49%, 1)",
                      textDecoration: "none",
                    }}
                  >
                    https://www.linkedin.com/in/ghanshyam-mangla-7511392a0/
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="d-flex justify-content-center">
          <h2 className="mt-5 mb-3 key-skills m-font">Follow Us</h2>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <div className="follow-us-links">
              <a
                href="https://www.facebook.com/profile.php?id=100022346324168"
                className="d-block text-decoration-none mb-2 p-font text-dark"
              >
                <span className="d-flex">
                  <i className="bi bi-facebook me-2 text-dark"></i>
                  <b className="text-dark">Facebook:</b>
                </span>
                <span
                  style={{
                    color: "hsla(35, 87%, 49%, 1)",
                    textDecoration: "none",
                  }}
                >
                  https://www.facebook.com/profile.php?id=100022346324168
                </span>
              </a>
              <a
                href="https://www.instagram.com/mangla.ghanshyam/"
                className="d-block text-decoration-none mb-2 p-font text-dark"
                style={{
                  color: "hsla(35, 87%, 49%, 1)",
                  textDecoration: "none",
                }}
              >
                <span className="d-flex">
                  <i className="bi bi-instagram me-2 text-dark"></i>
                  <b className="text-dark">Instagram:</b>
                </span>
                <span
                  style={{
                    color: "hsla(35, 87%, 49%, 1)",
                    textDecoration: "none",
                  }}
                >
                  https://www.instagram.com/mangla.ghanshyam/
                </span>
              </a>
              <a
                href="mailto:ghanshyammangla15@gmail.com"
                className="d-block text-decoration-none mb-2 p-font text-dark"
                style={{
                  color: "hsla(35, 87%, 49%, 1)",
                  textDecoration: "none",
                }}
              >
                <span className="d-flex">
                  <i className="bi bi-envelope me-2 text-dark"></i>
                  <b className="text-dark">Email:</b>
                </span>
                <span
                  style={{
                    color: "hsla(35, 87%, 49%, 1)",
                    textDecoration: "none",
                  }}
                >
                  ghanshyammangla15@gmail.com
                </span>
              </a>
              <a
                href="tel:+9034040304"
                className="d-block text-decoration-none mb-2 p-font text-dark"
                style={{
                  color: "hsla(35, 87%, 49%, 1)",
                  textDecoration: "none",
                }}
              >
                <span className="d-flex">
                  <i className="bi bi-telephone me-2 text-dark"></i>
                  <b className="text-dark">Phone Number:</b>
                </span>
                <span
                  style={{
                    color: "hsla(35, 87%, 49%, 1)",
                    textDecoration: "none",
                  }}
                >
                  9034040304
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="container prof_links">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28171.96175299567!2d76.99218515966142!3d28.039900092102243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3972d2b03debcc7f%3A0x609df713a23648c!2sMalab%2C%20Haryana%20122107!5e0!3m2!1sen!2sin!4v1729442021506!5m2!1sen!2sin"
              className="img-fluid" // Makes the iframe responsive
              style={{ width: "100%", height: "400px", border: "0" }} // Ensures iframe fills the column
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="col-lg-5 col-md-12 d-flex flex-column justify-content-center align-items-center">
            <h2 className="key-skills m-font text-center">
              Let's Work Together
            </h2>
            <br />
            <p className="text-dark p-font text-center">
              I'm excited about the possibility of collaborating with you on
              your next project. Whether you have a specific idea in mind or
              just want to explore potential opportunities, I'm here to help
              bring your vision to life. Feel free to reach out, and let's
              create something amazing together.
              <br />
              <div className="justify-content-end text-dark m-font">
                ~Ghanshyam
              </div>
              <br />
            </p>
            <div>
              <a href="mailto:ghanshyammangla15@gmail.com">
                <button
                  type="button"
                  className="btn btn-warning"
                  style={{ width: "100%", maxWidth: "430px" }} // Make button responsive
                >
                  <i
                    className="bi bi-envelope me-2 text-dark"
                    style={{ color: "white" }}
                  ></i>
                  Send me an Email
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
