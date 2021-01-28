import './Projects.css';
import projectsImage from './images/tamu_group.JPG';

function Projects() {
  return (
    <div className="projects">
          <div className="welcome-container">
            <img src={ projectsImage } alt="Texas A&M Class of 2020 Trip Group"></img>
            <div className="welcome-title">
              <div>
                <button className="backButton" onClick={ () => window.location.href="https://isaacy13.github.io/#/" }></button>
              </div>
              <div>
                <h1>PROJECTS</h1>
              </div>
            </div>
          </div>

          <div className="projects-heading">
            <h1>WHAT HAVE I BEEN UP TO?</h1>
            <p>Although I'm currently a full-time student, I try
              to set apart time for side projects that I'm interested in.

              Here's some of what I've been doing.
            </p>
          </div>


          <div className="projects-container">
            <div className="grid-container">
              <div className="grid">
                <section className="span-6 study-buddy-card card">
                  <div className="study-buddy-info">
                    <header>Study Buddy</header>
                    <div className="desc">
                      <p>Fall '20 - Current | A subgroup of the Aggie Coding Club
                        that develops an Android app to help make studying easier.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="span-6 ocr-app-card card">
                  <div className="ocr-app-info">
                    <header>OCR Document Scanner</header>
                    <div className="desc">
                      <p>December '20 | A side project to help me understand how to
                        connect Android with OCR libraries (for Study Buddy).
                      </p>
                    </div>
                  </div>
                </section>

                <section className="span-6 seam-carving-card card">
                  <div className="seam-carving-info">
                    <header>Seam Carving</header>
                    <div className="desc">
                      <p>Fall '20 | A project assigned in class that allows for
                        C++ powered image processing. Shrinks image without 
                        distorting image all while being content-aware.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="span-6 string-calc-card card">
                  <div className="string-calc-info">
                    <header>String Calculator</header>
                    <div className="desc">
                      <p>Fall '20 | A class-assigned project that used strings
                        to process simple equations with gigantic numbers.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

      </div>
  );
}

export default Projects;