import React from "react";
import project from "./data/projects.json";

const Project = () => {
  return (
    <div className="container projects my-3" id="project">
      <h1>PROJECTS</h1>
      <div className="row d-flex justify-content:center align-content-center">
        {project.map((data) => (
          <div key={data.id} className="my-3 col-md-4">
            <div
              className="card bg-dark text-light"
              style={{
                width: "18rem",
                border: "2px solid yellow",
                borderRadius: "10px",
              }}
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="img d-flex justify-content:center align-content-center">
                <img
                  src={data.imageSrc}
                  className="card-img-top"
                  alt={data.title}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <a href={data.demo} className="btn btn-primary">
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
