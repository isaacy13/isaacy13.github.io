import './Affiliations.css';
import affiliationsImage from './images/esp.JPG';

function Affiliations() {
    return (
        <div className="affiliations">
          <div className="welcome-container">
            <img src={ affiliationsImage } alt="Eagle Scout Project"></img>
            <div className="welcome-title">
              <div>
                <button className="backButton" onClick={ () => window.location.href="https://isaacy13.github.io/#/" }></button>
              </div>
              <div>
                <h1>AFFILIATIONS</h1>
              </div>
            </div>
          </div>

          <div className="affiliations-heading">
            <h1>COMMUNITY INVOLVEMENT?</h1>
            <p>Taking part in organizations and events have defined a large part of me. In middle school,
              taking part in STEM competitions led me to become an engineer today. Check out what 
              I'm doing these days!
            </p>
          </div>

          <div className="affiliations-container">
            <div className="grid-container">
              <div className="grid">
                <section className="span-6 affil-card aggie-coding-club-card">
                  <div className="acc-info">
                    <header>Aggie Coding Club</header>
                    <div className="desc">
                      <p>'20 - NOW. Texas A&M College Station's very own coding club.</p>
                      <li>Part of the Study Buddy front-end Android development team.</li>
                    </div>
                  </div>

                  <div className="acc-hover">
                    <a href="https://aggiecodingclub.com/"><img className="acc-logo" alt="Visit Aggie Coding Club's website!" src="resources/images/acc.svg"></img></a>
                  </div>
                </section>

                <section className="span-6 affil-card howdy-hack-card card">
                  <div className="hh-info">
                    <header>Texas A&M Howdy Hack</header>
                    <div className="desc">
                      <p>Fall '20. 24-hour hackathon, spy-themed! Teamed up with three
                        other freshmen to create an automated password cracker!
                      </p>
                    </div>
                  </div>

                  <div className="hh-hover">
                    <a href="http://tamuhack.com/"><img className="hh-logo" src="resources/images/tamuhack.svg" alt="Visit TamuHack's website!"></img></a>
                  </div>
                </section>

                <section className="span-6 affil-card datathon-card card">
                  <div className="datathon-info">
                    <header>Texas A&M Datathon</header>
                    <div className="desc">
                      <p>Summer '20. TAMU Datathon bootcamp. Attended summer camps going
                        over various computer science topics for beginners.
                      </p>
                    </div>
                  </div>
                  
                  <div className="datathon-hover">
                    <a href="https://tamudatathon.com/"><img className="datathon-logo" src="resources/images/datathon.svg" alt="Visit TAMU Datathon's website!"></img></a>
                  </div>
                </section>

                <section className="span-6 affil-card honors-card card">
                  <div className="honors-info">
                    <header>Texas A&M Engineering Honors</header>
                    <div className="desc">
                      <p>'20 - NOW. Texas A&M's honors program. Involvement with honors conferences
                        to consult others in the workforce.
                      </p>
                    </div>
                  </div>

                  <div className="honors-hover">
                    <a href="https://engineering.tamu.edu/academics/eh/index.html"><img className="honors-logo" src="resources/images/engr_honors.svg" alt="Visit Texas A&M University Engineering Honors's website!"></img></a>
                  </div>
                </section>

                <section className="span-6 affil-card fbhs-card card">
                  <div className="fbhs-info">
                    <header>Flour Bluff High School Basketball</header>
                    <div className="desc">
                      <p>'16 - '19. Flour Bluff High School's basketball team. Trained / competed 
                        more than 25 hours per week year-round.</p>
                    </div>
                  </div>

                  <div className="fbhs-hover">
                    <a href="https://hs.flourbluffschools.net/"><img className="fbhs-logo" src="resources/images/fbhs.svg" alt="Visit Flour Bluff High School's website!"></img></a>
                  </div>
                </section>

                <section className="span-6 affil-card bsa-card card">
                  <div className="bsa-info">
                    <header>Boy Scouts of America</header>
                    <div className="desc">
                      <p>'08 - '20. Pack 949 & Troop 949. Involvement with scouting from kindergarten
                        to senior year. Achieved rank of Eagle Scout after project for alma mater elementary
                        school.
                      </p>
                    </div>
                  </div>

                  <div className="bsa-hover">
                    <a href="https://www.scouting.org/"><img className="bsa-logo" src="resources/images/bsa.svg" alt="Visit Boy Scouts of America's website!"></img></a>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
    );
  }
  
export default Affiliations;  