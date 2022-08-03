import './css/Qualifications.css';

function Qualifications() {
  return (
    <div id="Qualifications" className="section">
      <div className="scroll" id="qual-text-container">
        <div id="qual-text">
          <h1 className="display-4 bold" style={{margin: 0}}>Qualifications</h1>
          <hr />
          <div className="accordion" id="qualificationsAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="qualificationsAccordionHeaderOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Skillset
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="qualificationsAccordionHeaderOne" data-bs-parent="#qualificationsAccordion">
                <div className="accordion-body">
                  <ul>
                    <li>Full-stack web, desktop, and mobile</li>
                    <li>Security principles in the design/testing of apps</li>
                    <li>Leading projects in Waterfall/Scrum methodologies</li>
                    <li>Integrating TDD with CI/CD pipelines (e.g.: linters, testing suites, code coverage, security auditing tools)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="qualificationsAccordionHeaderTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Areas of Interest
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="qualificationsAccordionHeaderTwo" data-bs-parent="#qualificationsAccordion">
                <div className="accordion-body">
                  <ul>
                    <li>Full-stack development</li>
                    <li>Cybersecurity</li>
                    <li>Applied ML</li>
                    <li>AR/VR</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="qualificationsAccordionHeaderThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Awards
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="qualificationsAccordionHeaderThree" data-bs-parent="#qualificationsAccordion">
                <div className="accordion-body">
                  <ul>
                    <li>Dean's Honor Award</li>
                    <li>Placed at TAMUctf 2022</li>
                    <li>Placed in Capsher Coding Challenge</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <a id="resume-button" type="button" className="btn btn-primary" href="https://drive.google.com/file/d/1GiUxl0dxoKzI5eyLd0ZgWl9n_IIbodQg/view?usp=sharing">
            <img src="resources/images/resume.svg" height="35px" width="35px" style={{ paddingRight: "10px" }} />
            Resume
          </a>
        </div>
      </div>
      
      <iframe src="https://drive.google.com/file/d/1GiUxl0dxoKzI5eyLd0ZgWl9n_IIbodQg/preview" allow="autoplay" id="resume"></iframe>

    </div>
  );
}

export default Qualifications;