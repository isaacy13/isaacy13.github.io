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
            <section className="about-me-card span-12">
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

            <section className="projects-card card span-6" tabindex="0">
              <header>Projects</header>

              <div className="card-desc">
                <p>Study Buddy</p>
                <p>Picture Roulette Bot</p>
                <p>OCR Document Scanner</p>
                <br></br>
                <p>Attendance System</p>
                <p>String Calculator</p>
                <br></br>
                <p>Eagle Scout Project</p>
                <p>...</p>
                <br></br>
              </div>
            </section>

            <section className="skills-interests-card card span-6" tabindex="0">
              <header>Skills & Interests</header>

              <div className="card-desc">
                  <p>C/C++</p>
                  <p>Python</p>
                  <p>Java</p>
                  <p>Android Studio</p>
                  <br></br>
                  <p>Strong Work Ethic</p>
                  <p>Demonstrated Leadership</p>
                  <p>Adaptability</p>
                  <p>...</p>
              </div>
            </section>

            <section className="education-card card span-6" tabindex="0">
              <header>Education & Work Experience</header>

              <div className="card-desc">
                <p>Texas A&M University College Station</p>
                <br></br>
                <p>Texas A&M University Corpus Christi</p>
                <p>Del Mar College</p>
                <p>Flour Bluff High School</p>
                <br></br>
                <p>Eyeland Vision</p>
                <p>Corpus Christi Optometric</p>
                <p>...</p>
              </div>
            </section>
      
            <section className="achievements-awards-card card span-6" tabindex="0">
              <header>Awards</header>

              <div className="card-desc">
                <p>Texas A&M Engineering Honors</p>
                <p>Texas A&M Dean's Honor Roll</p>
                <p>Texas A&M CC Anchor Academic Excellence List</p>
                <p>Texas A&M CC Dean's List</p>
                <br></br>
                <p>Eagle Scout</p>
                <br></br>
                <p>First Year Research Conference: Quantum Computing</p>
                <p>...</p>
              </div>
            </section>

            <section className="affiliations-card card span-6" tabindex="0">
              <header>Affiliations</header>

              <div className="card-desc">
                <p>Aggie Coding Club</p>
                <p>TAMU Howdy Hack</p>
                <p>TAMU Datathon</p>
                <br></br>
                <p>Boy Scouts of America</p>
                <p>...</p>
              </div>
            </section>

            <section className="goals-card card span-6" tabindex="0">
              <header>Ambitions & Goals</header>

              <div className="card-desc">
                <p>Summer 2020 Internship</p>
                <p>Summer School 2020</p>
                <p>Graduate Fall 2022</p>
                <br></br>
                <p>Land a passionate job</p>
                <p>...</p>
              </div>
            </section>    
          </div>
        </div>

        <div className="popup-window">
          <div className="popup-window-content">
            <div className="popup-window-header">
              <div className="close">&times;</div>
              <h2 id="popup-title">Projects Overview</h2>
            </div>
            <div className="popup-window-body">
              <div className="projects-popup popup-text">Projects Text</div>
              <div className="skills-interests-popup popup-text">Skills / Interests Text</div>
              <div className="education-popup popup-text">Education Text</div>
              <div className="achievements-awards-popup popup-text">Achievements / Awards Text</div>
              <div className="affiliations-popup popup-text">Affiliations Text</div>
              <div className="goals-popup popup-text">Goals Text</div>
            </div>
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
