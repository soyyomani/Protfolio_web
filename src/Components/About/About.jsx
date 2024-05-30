import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/IMG_7152.svg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>As an enthusiastic and driven individual with a strong passion for software development, mastering the C++ programming language and actively participating in coding challenges on platforms like #LEETCODE, I am also eager to expand my skills to encompass full-stack development. I am particularly interested in becoming proficient in the MERN stack, including React.js, Express.js, Node.js, and MongoDB. My proactive nature and strong work ethic ensure that I approach learning and projects with unwavering energy, making me a dependable and indispensable team member in any professional environment.</p>
                <p>My passion for full stack development is not only reflected in my words of speech but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"90%"}} /></div>
                <div className="about-skill"><p>Node Js</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>MongoDb</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Express Js</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>DSA</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>SQL</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>PHP</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>5+</h1>
            <p>Numbers of Project</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>3+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>2</h1>
            <p>Certificates of ML</p>
        </div>
      </div>
    </div>
  )
}

export default About
