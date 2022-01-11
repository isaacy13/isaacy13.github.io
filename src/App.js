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

class App extends react.Component {
  
  componentDidMount() {

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

  render() {
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
}

export default App;