import React,{Component} from 'react';
import {Tabs,Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state={activeTab : 0}
    }

toggleCategories(){
    if(this.state.activeTab === 0){
        return(
            <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'white',height:'176px',background:'url(https://www.dictionary.com/e/wp-content/uploads/2019/07/1000x700-quiz-v3.jpg) center/cover'}}>
                        Quizlet
                    </CardTitle>
                    <CardText>
                        This is a web based Quiz app which randomly generates 5 questions from set of 50 questions.
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/vp1410/Quizlet" target="_blank"> Github</Button>
                        {/* <Button colored> Github</Button>
                        <Button colored> Github</Button> */}
                    </CardActions>
                    <CardMenu style={{color:"#fff"}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'white',height:'176px',background:'url(https://sunnet.us/Content/Images/ecommerce-development.jpg) center/cover'}}>
                        Shopping Website
                    </CardTitle>
                    <CardText>
                        This is a web based shopping app built using React, Redux and Stripe API
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/vp1410/Shopping-Website" target="_blank"> Github</Button>
                        {/* <Button colored> Github</Button>
                        <Button colored> Github</Button> */}
                    </CardActions>
                    <CardMenu style={{color:"#fff"}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Project 3 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'white',height:'176px',background:'url(https://www.dylansalay.com/images/Monster.gif) center/cover'}}>
                        Monster Search
                    </CardTitle>
                    <CardText>
                        This is a simple application covering basics of React.js where you fetch monsters from API and search it.
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/vp1410/monsters-rolodex" target="_blank"> Github</Button>
                        {/* <Button colored> Github</Button>
                        <Button colored> Github</Button> */}
                    </CardActions>
                    <CardMenu style={{color:"#fff"}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
        )
    }else if(this.state.activeTab === 1){
        return(
            
            <div>
                {/* Project 1 */}
                  <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'white',height:'176px',background:'url(https://3u8dbs16f2emlqxkbc8tbvgf-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/impossiblewhopper_bk.jpg) center/cover'}}>
                        Recipe Project
                    </CardTitle>
                    <CardText>
                        This is a web based Recipe application where you can perform CRUD operations.
                        User has an option to Login/Sign-up.
                        This application also has an additional feature of shopping cart where they can add/remove/delete items they want to buy for their recipe
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/vp1410/Shopping-Basket" target="_blank"> Github</Button>
                        <Button colored href="https://recipe-book-5f625.firebaseapp.com/auth"> Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color:"#fff"}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
        )
    }else if(this.state.activeTab === 2){
        return(
            <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'white',height:'176px',background:'url(https://www.coindesk.com/wp-content/uploads/2016/11/Screen-Shot-2016-11-14-at-1.43.53-PM-e1479155905130.png) center/cover'}}>
                        Bitcoin Ticker
                    </CardTitle>
                    <CardText>
                    This is a small project in Node.js which converts Bitcoin value into currency of country selected.
                    This project was developed when I had taken a Udemy course to learn web development.
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/vp1410/Bitcoin-Ticker-Node.js" target="_blank"> Github</Button>
                        
                    </CardActions>
                    <CardMenu style={{color:"#fff"}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                 {/* Project 2 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'white',height:'176px',background:'url(https://images.everydayhealth.com/images/healthy-weight-and-bmi-calculator-722x406.jpg) center/cover'}}>
                        BMI Calculator
                    </CardTitle>
                    <CardText>
                        This is a small project in Node.js which calulates the BMI for user.
                        This project was developed when I had taken a Udemy course to learn web development.
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/vp1410/BMI-Calculator" target="_blank"> Github</Button>
                    </CardActions>
                    <CardMenu style={{color:"#fff"}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Project 3 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'white',height:'176px',background:'url(https://www.qeretail.com/blog/wp-content/uploads/2016/06/12-Fruitful-trends-for-Newsletter-Signup-form.jpg) center/cover'}}>
                        Newsletter Signup
                    </CardTitle>
                    <CardText>
                        This is a small project in Node.js where user can signup for newsletter.
                        I have made use of Mailchimp server for this project.
                        This project was developed when I had taken a Udemy course to learn web development.
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/vp1410/Newsletter-signup" target="_blank"> Github</Button>
                    </CardActions>
                    <CardMenu style={{color:"#fff"}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
        )
    }else if(this.state.activeTab === 3){
        return(
            <div>
                 <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'white',height:'176px',background:'url(data:image/png;base64,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) center/cover'}}>
                        Gun Violence in USA
                    </CardTitle>
                    <CardText>
                        Visualize gun violence incidents in an interactive map.
                        Get insights on the number of killed and injured.
                        Get insights on how the incident data changes during various years.
                        Search incidents in a specific range from another incident.
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/vp1410/KRT-GunViolence" target="_blank"> Github</Button>
                    </CardActions>
                    <CardMenu style={{color:"#fff"}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
        )
    }else if(this.state.activeTab === 4){
        return(
            <div>
                 <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{height:'176px',background:'url(https://madooei.github.io/cs421_sp20_homepage/assets/jdbc.png) center/cover'}}>
                        
                    </CardTitle>
                    <CardText>
                    In this course, we built applications that interact with databases. Through programming exercises, we worked with multiple databases and programmatically invoked the advanced database processing operations that are integral to contemporary computing applications. We examined and evaluated alternative approaches for each of these operations. Topics include the database drivers, the data layer, connectivity operations, security and integrity, and controlling database access.
                </CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/vp1410/ISTE-DatabaseConnectivityAccess" target="_blank"> Github</Button>
                    </CardActions>
                    <CardMenu style={{color:"#fff"}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
        )
    }
}   
    render(){
        return(
            <div className="category-tabs">
               <Tabs 
                activeTab={this.state.activeTab} 
                onChange={(tabId)=> this.setState({activeTab:tabId})} 
                ripple>
                <Tab>React</Tab>
                <Tab>Angular</Tab>
                <Tab>Node.js</Tab>
                <Tab>Javascript</Tab>
                <Tab>Database Connectivity</Tab>
                </Tabs>
                {/* <section className="projects-grid"> */}
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                            {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                   
                {/* </section> */}
            </div>
        );
    }
}
export default Projects;