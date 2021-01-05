// "homepage": "http://isaacy13.github.io/isaacy13.github.io",
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",

import './App.css';
function App() {
  return (

    // Initial Loading Screen
    <div className="centerDiv-container">
      <div className="centerDiv" id="prezi">
        <div>
          <h1 className="flyInAnimationByLetter" id="name">ISAAC YEANG</h1>
        </div>
        <div>
          <h1 className="fadeInAnimationByWord" id="presenting">PRESENTING</h1>
        </div>
        <div>
          <h2 className="zoomInAnimationByWord" id="placeholder">PLACEHOLDER</h2>
        </div>
        <br></br>
        <div>
          <button id="skipButton" className="fadeSkipButtonIn"></button>
        </div>
      </div>

      <div style={{ display:"none" }} id="homepage">
        <div id="decorations">
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>

        <div className="page-header">
          <div className="logo-container">
            <a href="https://isaacy13.github.io/">
              <img src="resources/initials.png" alt="Website logo"></img>
              <h1 id="IY-Logo">ISAAC YEANG</h1>
            </a>
          </div>
        </div>

        <div className="grid-container">
          <div className="grid">
            <section className="about-me-card span-12" tabindex="0">
              <div>
                <img src="resources/headshot.png" alt="headshot of Isaac Yeang"></img>
              </div>
              <p>
                <header>ISAAC YEANG</header>
                <div>
                  <p>Developer</p>
                </div>
              </p>
            </section>

            <section className="projects-card span-6" tabindex="0">
              <header>Projects</header>

              <div className="projects-card-desc">
                  <p>...</p>
              </div>

              <div className="projects-card-list" style = {{display: "none"}}>
                <div>
                  <p>
                    blah blah blah blah blah stuff stuff
                  </p>
                </div>
                <div>
                  <p>
                    blah blah blah blah blah stuff stuff
                  </p>
                </div>
              </div>
            </section>

            <section className="skills-interests-card span-6" tabindex="0">
              <header>Skills & Interests</header>

              <div className="skills-interests-card-desc">
                <p>...</p>
              </div>

              <div className="skills-interests-card-list" style = {{display: "none"}}>
                <div>
                  <p>
                    blah blah blah blah blah stuff stuff
                  </p>
                </div>
                <div>
                  <p>
                    blah blah blah blah blah stuff stuff
                  </p>
                </div>
              </div>
            </section>

            <section className="education-card span-6" tabindex="0">
              <header>Education</header>

              <div className="education-card-desc">
                <p>...</p>
              </div>

              <div className="education-card-list" style = {{display: "none"}}>
                <div>
                  <p>
                    blah blah blah blah blah stuff stuff
                  </p>
                </div>
                <div>
                  <p>
                    blah blah blah blah blah stuff stuff
                  </p>
                </div>
              </div>
            </section>
      
            <section className="achievements-awards-card span-6">
              <header>Awards</header>

              <div className="achievements-awards-card-desc">
                <p>...</p>
              </div>

              <div className="achievements-awards-card-list" style = {{display: "none"}}>
                <div>
                  <p>
                    blah blah blah blah blah stuff stuff
                  </p>
                </div>
                <div>
                  <p>
                    blah blah blah blah blah stuff stuff
                  </p>
                </div>
              </div>
            </section>
            
            
          </div>
        </div>
        
        <footer>
          <a href="mailto:isaac.yeang@aggienetwork.com" id="Gmail-Logo">
            <img src="resources/gmail.png" title="Email me" alt="Email Link"></img>
          </a>
          <a href="https://github.com/isaacy13/" id="Github-Logo">
            <img src="resources/github.png" title="Check out my Github" alt="Github Link"></img>
          </a>
          <a href="https://www.linkedin.com/in/isaac-yeang/" id="LinkedIn-Logo">
            <img src="resources/linkedin.png" title="Connect with me on LinkedIn" alt="LinkedIn Link"></img>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
