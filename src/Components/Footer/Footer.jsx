import React, { useState } from 'react';
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  const handleSend = () => {
    if (email.trim() === '') {
      alert('Please enter your email');
      return;
    }
    if (rating === 0) {
      alert('Please select a rating');
      return;
    }
    // Here, you can implement the logic to send the feedback via email
    // For demonstration purpose, we're logging the feedback to the console
    const feedback = {
      email: email,
      rating: rating
    };
    console.log("Feedback submitted:", feedback);
    alert('Thank you for your feedback!');
    setEmail('');
    setRating(0);
  };

  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <p>Thank you for visiting my portfolio. I would appreciate your feedback!</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your email' value={email} onChange={handleEmailChange} />
          </div>
          <div className="footer-stars">
            <p>Rate Me:</p>
            <div className="star-container">
              {[1, 2, 3, 4, 5].map((value) => (
                <span key={value} onClick={() => handleStarClick(value)}>
                  {value <= rating ? '⭐' : '☆'}
                </span>
              ))}
            </div>
          </div>
          <div className="footer-submit" onClick={handleSend}>Submit</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">Happy Mode ON</p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Contact Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
