import React,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div >
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img
                                src="https://avatars1.githubusercontent.com/u/52245030?s=460&u=b0719e6c928ae69eb930e54ead12d08190630758&v=4"
                                alt="resume"
                                style={{height:'200px',borderRadius:'50%'}}
                                />
                        </div>
                        <h2 style={{paddingTop:'2em'}}>Vivek Panchal</h2>
                        <h4 style={{color:'grey'}}> Programmer </h4>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                        <p>I am a Master's student at the Rochester Institute of Technology who is working as a Full Stack Developer at Rochester Regional Health.
                        </p>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                        <h5> Address</h5>
                        <p>718 Park Point Drive, Unit 8</p>
                        <p>Rochester, NY, 14623</p>
                        <h5>Phone</h5>
                        <p>+15855037203</p>
                        <h5>Email</h5>
                        <p>vp2890@rit.edu</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}> 
                        <h2>Education</h2>
                        <Education 
                            startYear={2013}
                            endYear={2017}
                            collegeName="Mumbai University"
                            collegeDescription="Completed my Bachelors Degree in Information Technology"
                        />
                        <Education 
                            startYear={2018}
                            endYear={'Present'}
                            collegeName="Rochester Institute of Technology"
                            collegeDescription="Pursuing my Masters Degree in Information Science and Technology"
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2> Experience </h2>
                        <Experience 
                            startYear={'Feb 2020'}
                            endYear={'Present'}
                            jobName="Rochester Regional Health - (Co-op)"
                            jobDescription=
                                    "Working as a full stack developer at Rochester Regional Health."
                        />
                         <Experience 
                            startYear={'Aug 2017'}
                            endYear={'Jan 2018'}
                            jobName="Network18 Media Investments & Pvt. Ltd."
                            jobDescription=
                                    "Worked as Junior Php Developer. The two sites I worked on were www.topperlearning.com and www.caprep18.com.
                                    The sites were initially built using CakePhp and was later revamped into Php.
                                    I was part of the team that was responsible for revamping.
                                    I designed and developed email templates that were part of marketing campaigns of our product.
                                    I also handled the technical issues faced by customers while operating both the websites."
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2> Skills</h2>
                        <Skills
                            skill="HTML/CSS"
                            progress= {100}
                        />
                        <Skills
                            skill="Javascript"
                            progress= {90}
                        />
                        <Skills
                            skill="React.JS"
                            progress= {80}
                        />
                        <Skills
                            skill="Node.JS"
                            progress= {70}
                        />
                        <Skills
                            skill="Angular.JS"
                            progress= {55}
                        />
                        <Skills
                            skill="Jquery"
                            progress= {65}
                        />
                        <Skills
                            skill="MySQL"
                            progress= {85}
                        />
                        <Skills
                            skill="MongoDB"
                            progress= {75}
                        />

                     </Cell>
                </Grid>
            </div>
        );
    }
}
export default Resume;