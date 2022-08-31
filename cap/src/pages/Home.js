import React from 'react';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
       <div className="about">
        <h2> Hello, My Name is Tyali Warren </h2>
        <div className="prompt">
          <p>This is my portfolio to complete my Captone. I hope it is simple and aesthetically pleasing
            to the eye and I hope you all enjoy the presentation. Thank you again for your time and patience on 
            today.

          </p>
        </div>
      </div>
      <div className="skills">
        <h1> Technical Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React Native, MaterialUI, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;