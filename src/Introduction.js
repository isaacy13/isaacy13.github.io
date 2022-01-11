import './Introduction.css';

function Introduction() {
  return (
    <div id="Introduction" className="section">
      <div style={{ width: "60%" }} className="section" id="selfie-container">
        <img src="resources/images/selfie.svg"/>
      </div>
      <div style={{width: "70%"}} id="introduction-desc-container">
        <div style={{width: "80%"}}>
          <h1 className="display-4 bold">Hey, I'm Isaac.</h1>
          <div className="content">
              <h2 className="fs-4">Senior at Texas A&M 🎓</h2>
              <h2 className="fs-4">Full stack web, mobile, and desktop 👨‍💻</h2>
              <h2 className="fs-4">Passionate about learning cool technologies 👨‍🔬</h2>
              <h2 className="fs-4">Let's connect! 🔌</h2>
          </div>
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