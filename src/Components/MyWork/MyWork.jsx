import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>Achievements</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            work.link ? (
              <a href={work.link} key={index} className='mywork-format' target="_blank" rel="noopener noreferrer">
                <h3>{work.s_no}</h3>
                <h2>{work.s_name}</h2>
                <p>{work.s_desc}</p>
                <div className='mywork-readmore'>
                  <p>Read More</p>
                  <img src={arrow_icon} alt="" />
                </div>
              </a>
            ) : (
              <div key={index} className='mywork-format'>
                <h3>{work.s_no}</h3>
                <h2>{work.s_name}</h2>
                <p>{work.s_desc}</p>
                <div className='mywork-readmore'>
                  <p>Read More</p>
                  <img src={arrow_icon} alt="" />
                </div>
              </div>
            )
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
}

export default MyWork;
