import './Qualifications.css';

function Qualifications() {
  return (
    <div id="Qualifications" className="section">
      <div style={{width: "50%"}}>
        <div style={{width: "80%", margin: "auto"}}>
          <h1 className="display-4 bold" style={{margin: 0}}>Qualifications</h1>
          <h2 className="display-6" style={{fontSize: "18px"}}>Spoiler: I enjoy developing</h2>
          <hr />
          <p className="fs-6">Senior year of high school, I was unsure of the future. Although I always knew college was the next step, I had no idea what I was passionate about.</p>
          <p className="fs-6">Luckily, I had stumbled across a free, online program known as CS50. So for the pandemic-ridden summer of my senior year, I was doing introductory C++ exercises. 
          Suprisingly, I enjoyed it a lot; somehow, manipulating the computer to do what I wanted was really appealing. From then, I knew computer science was the major meant for me.</p>

          <p className="fs-6">Fast forward a year later, after getting clobbered with harder yet much more interesting classes, I have never looked back on my career path. So far, I'm most interested in: </p>

          <ul>
            <li>Full-stack web, desktop, and mobile</li>
            <li>Applying machine learning to real-world scenarios</li>
            <li>AR/VR applications</li>
            <li>Learning more about other areas of development</li>
          </ul>

          <p className="fs-6">Looking forward to what the future holds!</p>
          
          <a type="button" className="btn btn-primary" href="resources/isaac_yeang_resume.pdf">Resume</a>
        </div>
      </div>
      
      <iframe src="resources/isaac_yeang_resume.pdf" id="resume" />

    </div>
  );
}

export default Qualifications;