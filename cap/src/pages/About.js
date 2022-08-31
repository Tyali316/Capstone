import React from 'react';
import { VerticalTimeline,
 VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PeopleIcon from "@material-ui/icons/People";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import HandshakeIcon from "@mui/icons-material/Handshake";
import "../styles/About.css";

function About() {
  return (
    <div className="About Me">
       <div className="summary">
          <p>Through my journey in this program, I met great people and learned many lessons. I can go on and on 
            about what I gained but below shows a simple timeline of some accomplishments I achieved from the beginning 
            to the present time.
          </p>
       </div>
      <br />
      <VerticalTimeline lineColor="black">
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="March 2022"
          iconStyle={{ background: "#382a40", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            My Journey began with Road to Hire
          </h3>
          <p> I became a Coding Apprentice in Road to Hire's Cohort 10.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May "
          iconStyle={{ background: "#382a40", color: "#fff" }}
          icon={< PeopleIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            Volunteered to be an ERG Leader
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Coding with Color
          </h4>

          <p> Hosted weekly meetings that increase engagement, mental health, all while creating a safe space. </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July"
          iconStyle={{ background: "#382a40", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            My first Technical Interview - Duke Energy 
          </h3>
          <p> The interview was a success and I will be moving forward as an IT Apprentice with the company.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" Present"
          iconStyle={{ background: "#382a40", color: "#fff" }}
          icon={<HandshakeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Getting ready for Match Day! 
          </h3>
          <p>
            It has been an amazing opportunity to be in this program, now it's time for the final countdown to Match Day.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default About;