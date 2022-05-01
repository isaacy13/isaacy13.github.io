import './Sidebar.css';

function Sidebar() {
    return (
        <div id="sidebar" className="scroll" style={{ height: "115px", bottom: "3vh" }}>
            <a id="webpage-start" className="sidebar-icon" href="#About">
                <img src="resources/images/power.svg"/>
                <p>Introduction</p>
            </a>

            <a id="about-me" className="sidebar-icon" href="#Introduction">
                <img src="resources/images/person.svg"/>
                <p>About Me</p>
            </a>

            <a id="qualifications" className="sidebar-icon" href="#Qualifications">
                <img src="resources/images/qualifications.svg"/>
                <p>Qualifications</p>
            </a>

            <a id="projects" className="sidebar-icon" href="#Projects">
                <img src="resources/images/project.svg"/>
                <p>Projects</p>
            </a>

            <a id="service" className="sidebar-icon" href="#Service">
                <img src="resources/images/service.svg"/>
                <p>Service</p>
            </a>

            <a id="compass" className="sidebar-icon">
                <img src="resources/images/compass_white.svg"/>
                <p>Expand Nav</p>
            </a>
        </div>
    );
}

export default Sidebar;