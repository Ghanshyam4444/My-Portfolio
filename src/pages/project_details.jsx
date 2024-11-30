import React from "react";
import { useAuth } from "../store/auth";

const Project_Details = () => {
  const { description, images } = useAuth();

  return (
    <div className="container my-5">
      <div className="text-center m-4">
        <h4 className="text-dark m-font">Description</h4>
      </div>
      <div className="">
        <div
          className="text-dark p-font"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className="text-center mt-5">
        <h4 className="text-dark m-font">Images</h4>
      </div>
      <div className="row mt-5">
        {images.map((imgSrc, index) => (
          <div key={index} className="col-12 mb-5 mt-2">
            {/* Image Number Label */}
            <h5 className="text-primary mb-3">Image {index + 1}</h5>
            <div className="card shadow-sm">
              <img
                src={imgSrc}
                alt={`Screenshot ${index + 1}`}
                className="card-img-top img-fluid rounded"
                style={{ maxHeight: "625px", objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project_Details;
