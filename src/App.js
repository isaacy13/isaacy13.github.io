import './App.css';

import About from './About';
import Qualifications from './Qualifications';
import Projects from './Projects';
import Service from './Service';
import Sidebar from './Sidebar';
import Introduction from './Introduction';
import Meet from './Meet';
import react from 'react';

// steps to run:
// npm start

// steps to deploy:
// 1. add to package.json under 'private'
// "homepage": "https://isaacy13.github.io/",
// 2. add to package.json under 'eject'
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build"
// 3. npm run deploy

class App extends react.Component {
  constructor() {
    super();

    // all images are loaded whenever images_loaded === total_images
    this.images_loaded = 0;
    this.total_images = -1;

    // determines whether skip button is shown
    this.show_skip = false;

    this.content = this.content.bind(this);
    this.loading = this.loading.bind(this);
  }
  
  componentDidMount() {
    // wait 2.5s before display skip button
    setTimeout(function() {
        this.show_skip = true;
        this.setState({show_skip : true});
      }
      .bind(this),
      2500
    );

    // alert others that content has loaded... stop loading page
    let images = document.getElementsByTagName("img");

    this.total_images = images.length;
    this.setState({total_images : images.length});
    
    for (let i = 0; i < images.length; i++) {
      images[i].onload = () => {
        this.images_loaded++;
        this.setState({images_loaded : this.images_loaded + 1});
      }
    }

    // for mobile, scroll to middle
    document.getElementById('About-title').scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
    });

    // make sure adblock didn't block resume
    let resume = document.getElementById("resume");
    if (resume == null)
      alert("Make sure AdBlock is off (some features may not work properly)");
  }

  // TODO: add pretty background

  content() {
    return (
      <div id="content">
        <Sidebar />
        <About />
        <Introduction />
        <Meet />
        <Qualifications />
        <Projects />
        <Service />
      </div>
    );
  }

  loading() {
    let loaded = this.images_loaded === this.total_images;
    
    // whenever page finishes loaded, perform animations
    if (loaded) {
      document.getElementById("about-tamu-logo").classList.add("roll");
      document.getElementById("about-name").style.opacity = 0;
        document.getElementById("about-job-title").style.opacity = 0;
      setTimeout(function() {
        document.getElementById("about-name").classList.add("slide-down");
        document.getElementById("about-job-title").classList.add("slide-down");
      },
        1000
      );
    }

    return(
      <div id="LoadingPage" className={`${loaded ? "fade" : ""}`}>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
        </svg>
        <div className="section">
          <h1 x="50%" y="50%" textAnchor="middle" stroke="#51c5cf" strokeWidth="2px" dy=".3em" className="fs-6">Loading</h1>
          <button type="button" className="btn btn-light fs-6" id="SkipButton" style={{ display: this.show_skip === true ? "unset" : "none" }}>Skip</button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <this.loading />
        <this.content />
      </div>
    );
  }
}

export default App;