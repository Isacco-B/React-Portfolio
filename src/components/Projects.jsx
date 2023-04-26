import React from "react";

function Project() {
  return (
    <section className="project-container" id="projects">
      <div className="project-title">
        <h1>Project</h1>
      </div>
      <div className="project-container-right">
        <div className="project">
          <div className="project-img">
            <img
              src="asset/img/project-exchangebtc.svg"
              alt="python cryptocurrency report project image "
            />
          </div>
          <div className="project-info">
            <h2>ExchangeBtc Web application </h2>
            <p>
              The project involves creating a free bitcoin exchange platform
              using Django and MongoDB
            </p>
            <a href="https://demo2.isaccobertoli.com/" target="_blank">
              <button className="btn-primary project-btn">Demo</button>
            </a>
            <a
              href="https://github.com/Isacco-B/MongodbProject_Start2Impact"
              target="_blank"
            >
              <button className="btn-primary">GitHub</button>
            </a>
            <div className="skill-project-img">
              <img src="asset/img/Python.svg" alt="python logo" />
              <img src="asset/img/django.svg" alt="django logo" />
              <img src="asset/img/mongo.svg" alt="mongodb logo" />
              <img src="asset/img/html-project.svg" alt="html logo" />
              <img src="asset/img/tailwind.svg" alt="tailwind logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project
