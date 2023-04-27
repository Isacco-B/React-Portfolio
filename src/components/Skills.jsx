import React, { useEffect } from 'react'

function Skills() {
  async function fetchSkill() {
    const response = await fetch("../../src/skills.json")
    const data = await response.json()
    console.log(data)
  }

  useEffect(()=>{
    fetchSkill()
  },[])
  return (
    <section className="skills" id="skills">
      <div className="skills-title">
        <h1>Skills</h1>
      </div>
      <div className="skills-container">
        <div className="skills-card">
          <i className="bi bi-brush-fill"></i>
          <h2>FrontEnd</h2>
          <p>
            My preferred technologies for Front-End web development and
            component design.
          </p>
          <h3>Language i speak:</h3>
          <div className="language-img">
            <img src="asset/img/html.svg" alt="html logo" />
            <img src="asset/img/css.svg" alt="css logo" />
            <img src="asset/img/js.svg" alt="javascript logo" />
            <img src="asset/img/bootstrap.svg" alt="bootstrap logo" />
          </div>
        </div>

        <div className="skills-card">
          <i className="bi bi-code skills-ico"></i>
          <h2>BackEnd</h2>
          <p>My preferred technologies for Back-End web programming.</p>
          <h3>Language i speak:</h3>
          <div className="language-img">
            <img src="asset/img/Python.svg" alt="python logo" />
            <img src="asset/img/django.svg" alt="django logo" />
            <img src="asset/img/mongo.svg" alt="mongodb logo" />
            <img src="asset/img/sql.svg" alt="sql logo" />
          </div>
        </div>

        <div className="skills-card">
          <i className="bi bi-currency-bitcoin skills-ico"></i>
          <h2>BlockChain</h2>
          <p>My preferred technologies for BlockChain web programming.</p>
          <h3>Language i speak:</h3>
          <div className="language-img">
            <img src="asset/img/eth.svg" alt="ethereum logo" />
            <img src="asset/img/solidity.svg" alt=" solidity logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
