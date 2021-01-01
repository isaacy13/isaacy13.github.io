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

        <div className="grid grid-container">
          <section> {/*card of information*/}
            <p>
              <header>ABOUT ME</header> {/*title*/}
              <div>
                <p>Hey! Welcome to my page. I love learning and creating! Check out some of my projects.</p>
              </div> {/*information*/}
            </p>
            {/* <img src="resources/headshot.png" alt="headshot of Isaac Yeang"></img> image */}
          </section>
          <section></section>
          <section></section>
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
