import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
      <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>MEET OUR TEAM</h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>

We are a team of three passionate software developers who excel in creating innovative software solutions. Our diverse skill sets allow us to deliver high-quality projects efficiently.

Team Members

1. SAURAV KUMAR: Full-stack developer skilled in bridging front-end and back-end technologies..
2. ASHUTOSH SINGH: Back-end expert focused on building robust and scalable systems.
3. NARESH SHARMA: Front-end specialist with an eye for design and user-friendly interfaces
Our Portfolio

We collaborate closely to develop web and mobile applications across various industries. Our goal is to deliver exceptional results that meet our clients' needs.

Let's connect to bring your ideas to life!</p>
          </div>
          <div className="right_container mt-3">
            <img src="\teams.jpeg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About