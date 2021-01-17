import './Affiliations.css';

function Affiliations() {
    return (
        <div className="affiliations">
          <div className="welcome-container">
            <div className="welcome-title">
              <div>
                <button className="backButton" onClick={ () => window.location.href="https://isaacy13.github.io/#/" }></button>
              </div>
              <div>
                <h1>AFFILIATIONS</h1>
              </div>
            </div>
          </div>

          <div className="affiliations-container">
            <div className="grid-container">
              <div className="grid">
                <section className="span-6 affil-card aggie-coding-club-card">
                  <header>Aggie Coding Club</header>
                  <div className="desc">
                    <p>'20 - NOW. Texas A&M College Station's very own coding club.</p>
                  </div>
                </section>

                <section className="span-6 affil-card howdy-hack-card">
                  <header>Texas A&M Howdy Hack</header>
                  <div className="desc">
                    <p>Fall '20. 24-hour hackathon, spy-themed!</p>
                  </div>
                </section>

                <section className="span-6 affil-card">
                  <header>Texas A&M Datathon</header>
                  <div className="desc">
                    <p>Summer '20. TAMU Datathon bootcamp.</p>
                  </div>
                </section>

                <section className="span-6 affil-card">
                  <header>Texas A&M Engineering Honors</header>
                  <div className="desc">
                    <p>'20 - NOW. Texas A&M's honors program.</p>
                  </div>
                </section>

                <section className="span-6 affil-card">
                  <header>Flour Bluff High School Basketball</header>
                  <div className="desc">
                    <p>'16 - '19. Flour Bluff High School's basketball team.</p>
                  </div>
                </section>

                <section className="span-6 affil-card">
                  <header>Boy Scouts of America</header>
                  <div className="desc">
                    <p>'08 - '20. Pack 949 & Troop 949.</p>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
    );
  }
  
export default Affiliations;  