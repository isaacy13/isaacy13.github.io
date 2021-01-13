// "homepage": "http://isaacy13.github.io/isaacy13.github.io",
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",

import './App.css';

function App() {
  return (
    <div className="centerDiv-container">
      <div id="homepage">
        <div id="decorations">
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>

        <div className="page-header">
          <div className="logo-container">
            <a href="https://isaacy13.github.io/#/">
              <img src="resources/images/initials.png" alt="Website logo"></img>
              <h1 id="IY-Logo">ISAAC YEANG</h1>
            </a>
          </div>
        </div>

        <div className="grid-container">
          <div className="grid">
            <section className="about-me-card span-12" tabIndex="0">
              <div>
                <img src="resources/images/headshot.png" alt="headshot of Isaac Yeang"></img>
              </div>
              <p>
                <header>ISAAC YEANG</header>
                <div>
                  <p>Developer</p>
                </div>
              </p>
            </section>

            <section className="projects-card card span-6 span-4" tabIndex="0">
              <header>Projects</header>

              <div className="card-desc">
                <p>Study Buddy</p>
                <p>Picture Roulette Bot</p>
                <p>OCR Document Scanner</p>
                <p>...</p>
              </div>
            </section>

            <section className="skills-interests-card card span-6 span-4" tabIndex="0">
              <header>Skills & Interests</header>

              <div className="card-desc">
                  <p>C/C++</p>
                  <p>Python</p>
                  <p>Java</p>
                  <p>...</p>
              </div>
            </section>

            <section className="education-card card span-6 span-4" tabIndex="0">
              <header>Education & Work</header>

              <div className="card-desc">
                <p>Texas A&M University College Station</p>
                <p>Texas A&M University Corpus Christi</p>
                <p>Del Mar College</p>
                <p>...</p>
              </div>
            </section>
      
            <section className="achievements-awards-card card span-6 span-4" tabIndex="0">
              <header>Awards</header>

              <div className="card-desc">
                <p>Texas A&M Engineering Honors</p>
                <p>Texas A&M Dean's Honor Roll</p>
                <p>Texas A&M CC Anchor Academic Excellence List</p>
                <p>...</p>
              </div>
            </section>

            <section className="affiliations-card card span-6 span-4" tabIndex="0">
              <header>Affiliations</header>

              <div className="card-desc">
                <p>Aggie Coding Club</p>
                <p>TAMU Howdy Hack</p>
                <p>TAMU Datathon</p>
                <p>...</p>
              </div>
            </section>

            <section className="goals-card card span-6 span-4" tabIndex="0">
              <header>Ambitions & Goals</header>

              <div className="card-desc">
                <p>Summer 2020 Internship</p>
                <p>Summer School 2020</p>
                <p>Graduate Fall 2022</p>
                <p>...</p>
              </div>
            </section>    
          </div>
        </div>

        <footer>
          <a href="mailto:isaac.yeang@aggienetwork.com" id="Gmail-Logo">
            <img src="resources/images/gmail.png" title="Email me" alt="Email Link"></img>
          </a>
          <a href="https://github.com/isaacy13/" id="Github-Logo">
            <img src="resources/images/github.png" title="Check out my Github" alt="Github Link"></img>
          </a>
          <a href="https://www.linkedin.com/in/isaac-yeang/" id="LinkedIn-Logo">
            <img src="resources/images/linkedin.png" title="Connect with me on LinkedIn" alt="LinkedIn Link"></img>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
