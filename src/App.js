import React from 'react';
import {Layout, Header, Navigation,Drawer,Content} from 'react-mdl';
import './App.css';
import Main from './components/main';
import {Link} from 'react-router-dom';
function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:'none',color:'black'}} to="/">Vivek Panchal</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
              <Link to="/resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <Main />
           
        </Content>
        {/* <div className="footer">
          <h1>Copyright@Vivek Panchal</h1>
        </div> */}
    </Layout>
    
</div>
  );
}

export default App;
