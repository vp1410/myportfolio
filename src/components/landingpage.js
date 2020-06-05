import React,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://avatars1.githubusercontent.com/u/52245030?s=460&u=b0719e6c928ae69eb930e54ead12d08190630758&v=4"
                            alt="avatar"
                            className="avatar-img"
                            />
                            <div className="banner-text">
                                <h1>Full Stack Web Developer</h1>
                                <hr/>
                                <p>HTML/CSS | Bootstrap | Javascript | Jquery | React.js/Redux | Node.js | AWS | FireBase
                                    | MySql | MongoDB | Php | Angular.js | Java | Python | R | Tableau | Pentaho | ArcGIS
                                </p>
                                <div className="social-links">
                                    {/* Linkedin */}
                                    <a href="https://www.linkedin.com/in/vivek-panchal-/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                    </a>
                                    {/* Github */}
                                    <a href="https://github.com/vp1410" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square" aria-hidden="true"/>
                                    </a>
                                    {/* Facebook */}
                                    <a href="https://www.facebook.com/vivek.panchal.90" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-facebook-square" aria-hidden="true"/>
                                    </a>
                                    {/* Instagram */}
                                    <a href="https://www.instagram.com/vivek_vk14/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-instagram" aria-hidden="true"/>
                                    </a>
                                </div>
                            </div>
                        </Cell>
                </Grid>
            </div>
        );
    }
}
export default Landing;