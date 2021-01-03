// "homepage": "http://isaacy13.github.io/isaacy13.github.io",
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",

import './App.css';
function App() {
  return (
    <div>
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
            <section className="about-me-card"> {/*card of information*/}
              <div>
                <img src="resources/headshot.png" alt="headshot of Isaac Yeang"></img>
              </div>
              <p>
                <header>ISAAC YEANG</header> {/*title*/}
                <div>
                  <p>Aspiring Developer</p>
                </div> {/*information*/}
              </p>
            </section>

            <section className="projects-card">
                <p>
                  <header>Projects</header> {/*title*/}
                  <div>
                    <p>...</p>
                  </div> {/*information*/}
                </p>
              </section>

            <section className="skills-interests-card">
                <p>
                  <header>Skills & Interests</header> {/*title*/}
                  <div>
                    <p>...</p>
                  </div> {/*information*/}
                </p>
              </section>
            <section></section>
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
