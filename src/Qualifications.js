import './Qualifications.css';

function Qualifications() {
  return (
    <div id="Qualifications" className="section">
      <div className="scroll" id="qual-text-container">
        <div id="qual-text">
          <h1 className="display-4 bold" style={{margin: 0}}>Qualifications</h1>
          <hr />

          <h2 className="display-6 section-header">Skillset</h2>
          <ul>
            <li>Full-stack web, desktop, and mobile</li>
            <li>Security principles in the design/testing of apps</li>
            <li>Leading projects in Waterfall/Scrum methodologies</li>
            <li>Integrating TDD with CI/CD pipelines (e.g.: linters, testing suites, code coverage, security auditing tools)</li>
          </ul>
          <hr />

          <h2 className="display-6 section-header">Areas of Interest</h2>
          <ul>
            <li>Full-stack development</li>
            <li>Cybersecurity</li>
            <li>Applied ML</li>
            <li>AR/VR</li>
          </ul>
          <hr />

          <h2 className="display-6 section-header">Awards</h2>
          <ul>
            <li>Dean's Honor Award</li>
            <li>Placed at TAMUctf 2022</li>
            <li>Placed in Capsher Coding Challenge</li>
          </ul>
          
          <a type="button" className="btn btn-primary" href="https://drive.google.com/file/d/1GiUxl0dxoKzI5eyLd0ZgWl9n_IIbodQg/view?usp=sharing">Resume</a>
        </div>
      </div>
      
      <iframe src="https://drive.google.com/file/d/1GiUxl0dxoKzI5eyLd0ZgWl9n_IIbodQg/preview" allow="autoplay" id="resume"></iframe>

    </div>
  );
}

export default Qualifications;