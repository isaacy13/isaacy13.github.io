import './Awards.css';
import awardsImage from './images/IMG_0220.JPG';

function Awards() {
    return (
      <div className="awards">
        <div className="welcome-container">
          <img src={ awardsImage } alt="Award ceremony"></img>
          <div className="welcome-title">
            <div>
              <button className="backButton" onClick={ () => window.location.href="https://isaacy13.github.io/#/" }></button>
            </div>
            <div>
              <h1>AWARDS</h1>
            </div>
          </div>
        </div>
        
        <div className="awards-container">
          <div className="awards-heading">
            <h1>WHAT'S MY TRACK RECORD?</h1>
            <p>Although they're not much more than arbitrary titles,
              I believe it's nonetheless important to establish a record.</p>
          </div>

          <div className="awards-list">
            <table>
              <table>
                <tr>
                  <td>
                    <h2>Capsher Coding Challenge</h2>
                    <h3>Texas A&M College Station</h3>
                    <p>Fall '20, Aggie Coding Club. Placed second for overall
                      projects.
                    </p>
                  </td>
                </tr>
              </table>

              <table>
                <tr>
                  <td>
                    <h2>Dean's Honor Roll</h2>
                    <h3>Texas A&M College Station</h3>
                    <p>Fall '20. Academic distinguishment for students
                      registered in 15+ credit hours maintaining a 3.75 GPA or higher.
                    </p>
                  </td>
                  <td>
                    <h2>Dean's List</h2>
                    <h3>Texas A&M Corpus Christi</h3>
                    <p>'19 - '20 School Year. Academic distinguishment for students
                      registered in 12+ credit hours maintaining a 3.65 GPA or higher.
                    </p>
                  </td>
                </tr>
              </table>

              <table>
                <tr>
                  <td>
                    <h2>Academic Excellence List</h2>
                    <h3>Texas A&M Corpus Christi</h3>
                    <p>'18 - '19 School Year. Academic distinguishment for students
                      registered in 7-11 credit hours maintaining a 3.65 GPA or higher.
                    </p>
                  </td>
                  <td>
                    <h2>Honor Roll</h2>
                    <h3>Flour Bluff High School</h3>
                    <p>'16 - '20 School Years. Academic distinguishment for students
                      maintaining a GPA of 90 or higher.
                    </p>
                  </td>                
                </tr>
              </table>

              <table>
                <tr>
                  <td>
                    <h2>Eagle Scout</h2>
                    <h3>Boy Scouts of America</h3>
                    <p>'20, Troop 949. Attained rank of Eagle Scout after 12 years
                      of activities and an Eagle Scout project.
                    </p>
                  </td>
                  <td>
                    <h2>Order of the Arrow</h2>
                    <h3>Boy Scouts of America</h3>
                    <p>'16, Troop 949. Obtained membership of inner-society of Boy Scouts
                      after being voted in by troop members based on character.
                    </p>
                  </td>                
                </tr>
              </table>
            </table>          
          </div>

        </div>
      </div>
    );
  }
  
export default Awards;  