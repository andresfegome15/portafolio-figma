import React from "react";
import "../style/footer.css";
const Footer = () => {
  return (
    <div className='container-footer'>
      <div className='left'>© Andrés González developer</div>
      <ul className='container-enlaces'>
        <li>
          <a href='https://www.linkedin.com/in/andr%C3%A9s-felipe-401a671ab/'>
            <i class='fa-brands fa-linkedin'></i>
          </a>
        </li>
        <li>
          <a href='https://github.com/andresfegome15'>
            <i class='fa-brands fa-github'></i>
          </a>
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default Footer;
