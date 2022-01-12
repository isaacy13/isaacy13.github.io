import logo from './logo.svg';
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

    this.content = this.content.bind(this);
    this.loading = this.loading.bind(this);
  }
  
  componentDidMount() {
    // alert others that content has loaded
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

  content() {
    return (
      <div>
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
    return(
      <div id="LoadingPage" style={{ display: this.images_loaded === this.total_images ? "none" : "block" }} >
        loading
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