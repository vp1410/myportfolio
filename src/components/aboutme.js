import React,{Component} from 'react';
import Vivek from '../images/Developer.jpg';

class About extends Component{
    render(){
        return(
            <div className="about-me">
                <img src={Vivek} alt="error" className="vivek"/>
                <div className="centered"><b><marquee>Vivek </marquee></b></div>
                <div className="abtme">
                    <p> Hi! My name is Vivek Panchal. I am pursuing my Masters in the field of Information Science and Technology.
                        Currently I am working as a Full Stack Developer at Rochester Regional Health.
                        I am looking for a full time job, leveraging my expertise in full stack development and data engineering with a view to express my innovative skills for self and company growth.
                        <br /><br />
                        I was only 14 years old when I got my first computer, and I was mesmerized by the things it could do. I made a resolution to become well-versed with the programs and functions it could perform. Today, a decade later, I am still on the same path – exploring the inner-world of the computer. Over the years I came to know how applications, websites and programs are created through coding and began to take keen interest in coding. After high school and college, I took up Information Technology as my Engineering stream.
                        <br/><br/>
                        I love applying all kinds of responsive designs and watch web pages developed by me shrink into mobile screens and still look amazing.
                        <br /><br/>
                        I believe that success demands a healthy work ethic. Simple things like being on time, meeting targets and deadlines and working to the best of one’s ability are ultimately what differentiates a successful project from an unsuccessful one. My determination and persistence to work hard and keep moving forward in the face of obstacles have led to success – both in academics and at work. My eagerness and willingness to learn is evidenced by the fact that I honestly admit mistakes. 
                    </p>
                </div>
            </div>
        );
    }
}
export default About;