import './css/Introduction.css';

function Introduction() {
  return (
    <div id="Introduction" className="section">
      <div  className="section" id="selfie-container">
        <img src="resources/images/selfie.png"/>
      </div>
      <div id="introduction-desc-container" >
        <div style={{width: "80%", margin: "auto"}}>
          <h1 className="display-4 bold">Hey, I'm Isaac.</h1>
          <ul className="list-group">
            <li className="list-group-item fs-4">Graduating senior @ Texas A&M <span className="list-image">🎓</span></li>
            <li className="list-group-item fs-4">Full-stack software development <span className="list-image">👨‍💻</span></li>
            <li className="list-group-item fs-4">Emphasis on cybersecurity <span className="list-image">🔒</span></li>
            <li className="list-group-item fs-4">Passion for tech <span className="list-image">💖</span></li>
            <li className="list-group-item fs-4">Let's connect! <span className="list-image">🔌</span></li>
          </ul>
          <div className="horizontal-icons">
            <a href="https://www.linkedin.com/in/isaac-yeang/" id="linkedin-logo">
              <img src="resources/images/linkedin.svg" width="50px" height="50px"/>
            </a>
            <a href="https://github.com/isaacy13" id="github-logo">
              <img src="resources/images/github.svg" width="50px" height="50px"/>
            </a>
            <a href="mailto:iyastros@gmail.com"id="gmail-logo">
              <img src="resources/images/gmail.svg" width="50px" height="50px"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;