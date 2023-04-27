import React from 'react'
import Skills from './Skills';
import { skills } from '../data';

function SkillsList() {
    return (
      <section className="skills" id="skills">
        <div className="skills-title">
          <h1>Skills</h1>
        </div>
        <div className="skills-container">
          {skills.map((skill)=>{
            return(
              <Skills key={skill.id} {...skill}/>
            )
          })}
        </div>
      </section>
    );
}

export default SkillsList

