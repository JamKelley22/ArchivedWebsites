import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
//import Particles from 'react-particles-js';

import './App.css';

import Home from './components/Home/home.js';
import Blog from './components/Blog/blog.js';
import About from './components/About/about.js';
import Skills from './components/Skills/skills.js';
import Work from './components/Work/work.js';
import Contact from './components/Contact/contact.js';
import Resume from './components/Resume/resume.js';
import Sidebar from './components/Nav/sidebar.js'

import * as routes from './constants/routes';
import Notifications from 'react-notify-toast';

class App extends React.Component {
  state = {
    sidebarVisible: true
  }

  doToggleSidebar = () => {
    console.log("Here");
    this.setState({
      sidebarVisible: !this.state.sidebarVisible
    })
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <Notifications />
          {
            this.state.sidebarVisible &&
            <div id='sidebar'>
              <Sidebar/>
            </div>
          }
          {
            !this.state.sidebarVisible &&
            <div id='sidebarHide'>
              <Sidebar/>
            </div>
          }

          {
            this.state.sidebarVisible &&
            <button onClick={this.doToggleSidebar} id='toggleSidebar'>
              <p>{'<'}</p>
            </button>
          }
          {
            !this.state.sidebarVisible &&
            <button onClick={this.doToggleSidebar} id='toggleSidebarLeft'>
              <p>{'<'}</p>
            </button>
          }

          <div id='content'>
            <div id='center'>
              <Route exact path={routes.HOME} component={() => <Home/>} />
              <Route exact path={routes.CONTACT} component={() => <Contact/>} />
            </div>
            <Route exact path={routes.BLOG} component={() => <Blog/>} />
            <Route exact path={routes.ABOUT} component={() => <About/>} />
            <Route exact path={routes.SKILLS} component={() => <Skills/>} />
            <Route exact path={routes.WORK} component={() => <Work/>} />
            <Route exact path={routes.RESUME} component={() => <Resume/>} />
          </div>

        </div>
      </Router>
    );
  }
}


export default App;
