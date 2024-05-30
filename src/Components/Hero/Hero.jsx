import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile-image.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Manikanta</span></h1>
      <h1>Software Developer|Full-Stack Developer</h1>
      <p>Aspiring Computer Science Engineer at NIT Delhi, passionate about software development. Graduating in 2025, I'm eager to innovate and contribute to cutting-edge technology solutions. Let's build the future together!</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <div className="hero-resume">
          <a href="/resume.pdf" download="Manikanta_Resume.pdf">My resume</a>
        </div>
        </div>
        <div>
        <div className="hero-social">
            <div>
            <li><a href="https://www.linkedin.com/in/manikanta-manikanta-662b3322b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </div>

            <div>
              <li><a href="https://github.com/soyyomani" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </div>
            <div>
              <li><a href="https://www.twitter.com/Manikanta1922" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </div>
            <div>
              <li><a href="https://www.instagram.com/soy_yo_manikanta" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </div>
            <div>
              <li><a href="mailto:youremail@example.com">kumarmanikanta808@gmail.com</a></li>
              </div>
            <div>
              <li>+91 8660089848</li>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
