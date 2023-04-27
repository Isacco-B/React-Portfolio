import React from 'react'

function Project({ id, direction, title, info, links, img, ico}) {
  return (
    <div className={direction}>
      <div className="project">
        <div className="project-img">
          <img src={img.path} alt={img.alt} />
        </div>
        <div className="project-info">
          <h2>{title}</h2>
          <p>{info}</p>
          {links.map((item) => {
            const { link, name } = item;
            return (
              <a href={link} target="_blank">
                <button className="btn-primary project-btn">{name}</button>
              </a>
            );
          })}
          <div className="skill-project-img">
            {ico.map((item) => {
              const { path, alt } = item;
              return <img src={path} alt={alt} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

