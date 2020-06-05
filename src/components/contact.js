import React,{Component} from 'react';
import {Grid, Cell,List,ListItemContent,ListItem} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Vivek Panchal</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="Vivek Panchal"
                            style={{height:'250px'}}
                            />
                        {/* <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>
                        I am a master's student at the Rochester Institute of Technology who is working as a Web Developer at Rochester Regional Health.

I love applying all kinds of responsive designs and watch web pages developed by me shrink into mobile screens and still look amazing.

I believe that success demands a healthy work ethic. Simple things like being on time, meeting targets and deadlines and working to the best of one’s ability are ultimately what differentiates a successful project from an unsuccessful one. My determination and persistence to work hard and keep moving forward in the face of obstacles have led to success – both in academics and at work. My eagerness and willingness to learn is evidenced by the fact that I honestly admit mistakes. 
                        </p> */}
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (585) 503-7203
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    vp2890@rit.edu
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    vicky.vivek14@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    <a href="https://www.linkedin.com/in/vivek-panchal-/" className="linkedin"> Vivek Panchal</a>
                  </ListItemContent>
                </ListItem>
                 </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Contact;