import React from "react";

export const Projects: React.FC = () => {
  return (
    <div className="container-fluid">
      <br />
      <br />
      <br />

      <h6>Selected projects</h6>

      <div className="vertical"></div>
      <br />

      <div className="whitespace"></div>
      <div className="whitespace"></div>

      <div className="row">
        <div className="col-lg-8"></div>

        <div
          className="col-lg-4 project project1 wow fadeInUp"
          onClick={() => (location.href = "project.html")}
        ></div>
      </div>

      <div className="whitespace"></div>

      <div className="row">
        <div
          className="col-lg-6 project project2 wow fadeInUp"
          onClick={() => (location.href = "project.html")}
        ></div>

        <div className="col-lg-6"></div>
      </div>

      <div className="whitespace"></div>

      <div className="row">
        <div className="col-lg-7"></div>

        <div
          className="col-lg-4 project project3 wow fadeInUp"
          onClick={() => (location.href = "project.html")}
        ></div>

        <div className="col-lg-1"></div>
      </div>

      <div className="whitespace"></div>

      <div className="row">
        <div className="col-lg-1"></div>

        <div
          className="col-lg-5 project project4 wow fadeInUp"
          onClick={() => (location.href = "project.html")}
        ></div>

        <div className="col-lg-6"></div>
      </div>

      <div className="whitespace"></div>
    </div>
  );
};
