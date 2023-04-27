import React from "react";

function Skills({ id, title, ico, img, info }) {
  return (
    <div className="skills-card">
      <i className={ico}></i>
      <h2>{title}</h2>
      <p>{info}</p>
      <h3>Language i speak:</h3>
      <div className="language-img">
        {img.map((item)=>{
          const {path,alt} = item
          return <img src={path} alt={alt} />;
        })}
      </div>
    </div>
  );
}

export default Skills;
