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

        <div className="title">
          <h1 style={{ textAlign: "center" }}>CONTROL CENTER</h1>
        </div>

        <div className="navButtons">
          <button id="leftButton" className="fadeSkipButtonIn"></button>
          <button id="rightButton" className="fadeSkipButtonIn"></button>
        </div>

        <div id="planet-container">
          <button id="planet">
            <img id="planet-img" src="resources/saturn.png" alt="planet"></img>
          </button>
        </div>

        <footer>
          <a className="footerContent" href="mailto:isaac.yeang@aggienetwork.com" id="Gmail-Logo">
            <img src="resources/gmail.png" title="Email me" alt="Email Link"></img>
          </a>
          <a className="footerContent" href="https://github.com/isaacy13/" id="Github-Logo">
            <img src="resources/github.png" title="Check out my Github" alt="Github Link"></img>
          </a>
          <a className="footerContent" href="https://www.linkedin.com/in/isaac-yeang/" id="LinkedIn-Logo">
            <img src="resources/linkedin.png" title="Connect with me on LinkedIn" alt="LinkedIn Link"></img>
          </a>
      </footer>
      </div>
    </div>
  );
}

export default App;
