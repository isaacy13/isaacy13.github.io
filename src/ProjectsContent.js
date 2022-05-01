import './ProjectsContent.css';

function ProjectsContentTemplate(props) {
    let colors = ["purple-blue", "purple-red", "purple-teal", "purple-pink", "purple-black"];
    let selection = Math.floor(Math.random() * ((colors.length)-0) + 0);
    let backdrop = colors[selection];

    if(typeof backdrop == 'undefined')
        backdrop = colors[0];

    return(
        <div id="project-content-container" className="content scroll" style={{ width: "100%" }}>
            <div className="scroll" style={{ padding: "10px" }}>
                <div className={`project-image section ${backdrop}`}>
                    <h1 className="project-title fs-1 bold">{ props.name }</h1>
                </div>

                <div className="section scroll project-description" style={{ display: "block" }}>
                    {props.skills.map((skill, index) =>
                        <div className={`section skill ${backdrop}`} key={index} style={{ marginRight: index === props.skills.length-1 ? '0' : '5px' }}>
                                <h1 className="fs-4 bold">{ skill }</h1>
                        </div>
                    )}
                </div>

                <div className="project-description scroll">
                    { props.description }
                </div>
            </div>
        </div>
    );
}

function Privacy() {
    return(
        <h1 className="fs-5 private">
            Out of respect for the customer's privacy, this project is <span style={{textDecoration: "underline"}}>private</span>.
        </h1>
    );
}

function PrivateRepo() {
    return(
        <h1 className="fs-5 private">
            For academic honor code reasons, this repo is <span style={{textDecoration: "underline"}}>private</span>.
        </h1>
    );
}

export function SAIFDClubSite() {
    let desc = 
        <div>
            <h1 className="fs-5">
                Created for the Student American Institute of Floral Design chapter at Texas A&M College Station as part of CSCE 431.
            </h1>

            <ul>
                <li>TDD integrated into CI/CD pipeline</li>
                <ul>
                    <li>Linter (Rubocop)</li>
                    <li>Code coverage tool (SimpleCov)</li>
                    <li>Security auditing tool (Brakeman)</li>
                    <li>Testing suites (RSpec)</li>
                    <li>CI/CD pipeline used GitHub Actions & Heroku</li>
                </ul>
                <li>Strict version control</li>
                <ul>
                    <li>Required approval for merges into main</li>
                    <li>Required code reviews for merging into staging/main</li>
                    <li>Must pass CI testsuite before merging</li>
                </ul>
                <li>Scrum master</li>
                <ul>
                    <li>Led scrum meetings, sprint reviews, & retrospectives</li>
                    <li>Managed JIRA (including definition of done, customer acceptance criteria)</li>
                </ul>
                <li>Stakeholder management/communication planning</li>
                <li>Risk mitigation, monitoring, & management planning</li>
                <li>Full-stack</li>
                <li>Peer programming</li>
                <li>UI/UX Mockups</li>
                <li>Hosted on Heroku</li>
            </ul>

            <Privacy />
        </div>;

    let skills = ["Ruby", "Rails", "CSS", "Bootstrap", "Google OAuth", "TDD", "MVC Model", "CI/CD Pipeline", "Scrum", "Web App"];

    return(
        <ProjectsContentTemplate 
            name="SAIFD Club Site"
            skills={skills}
            description={desc}/>
    );
}

export function PersonalWebsite() {
    let desc = 
        <div>
            <h1 className="fs-5">
                Initially for an assignment, my website is now hosted on GitHub Pages.
            </h1>

            <ul>
                <li>JS Animations</li>
                <li>CSS Keyframe Animations</li>
                <li>Hosted on GH Pages</li>
            </ul>

            <h1 className="fs-5"><a href="https://isaacy13.github.io/" style={{fontWeight: 500}}>Check it out</a></h1>
        </div>;

    let skills = ["ReactJS", "JQuery", "HTML", "CSS", "Bootstrap", "Web App"];

    return(
        <ProjectsContentTemplate 
            name="Personal Website"
            skills={skills}
            description={desc}/>
    );
}

export function GeoEats() {
    let desc = 
        <div>
            <h1 className="fs-5">
                Geo Eats was an idea born after wasting hours driving around cities, deciding on a spot to eat. Our goal was to make 
                deciding on a recipe/restaurant faster.
            </h1>
            <h1 className="fs-5">
                Did I mention it works for groups?
            </h1>

            <ul>
                <li>Full-stack</li>
                <li>Peer programming</li>
                <li>UI/UX Mockups</li>
            </ul>

            <h1 className="fs-5"><a href="https://geo-eats.herokuapp.com/" style={{fontWeight: 500}}>Check it out</a></h1>
            
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="resources/images/geo-eats-1.png" className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                    <img src="resources/images/geo-eats-2.png" className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                    <img src="resources/images/geo-eats-3.png" className="d-block w-100" alt="" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </div>;

    let skills = ["Flask", "HTML", "CSS", "Bootstrap", "APIs", "Scrum", "PostgreSQL", "Web App"];

    return(
        <ProjectsContentTemplate 
            name="Geo Eats"
            skills={skills}
            description={desc}/>
    );
}

export function MovieRecommender() {
    let desc = 
        <div>
            <h1 className="fs-5">
                JIRAS Movies (named by mashing our first initials together) was a class project in which we were tasked with
                creating movie recommendations based on different specifications.
            </h1>
            <ul>
                <li>Full-stack</li>
                <li>Project manager</li>
                <ul>
                    <li>Coordinated peer-programming sessions</li>
                    <li>Distributed workload evenly among devs</li>
                </ul>
                <li>Cross-platform framework</li>
                <li>Peer programming</li>
                <li>UI/UX Mockups</li>
            </ul>
            <PrivateRepo />
        </div>;

    let skills = ["Java", "Swing", "Waterfall", "PostgreSQL", "Cross-platform"];
    return(
        <ProjectsContentTemplate 
            name="Movie Recommender" 
            skills={skills}
            description={desc}/>
    );
}

export function MetisTiles() {
    let desc = 
        <div>
            <h1 className="fs-5">
                Tiles is a project that I created because there were no free Windows schedule apps that looked good and didn't 
                freeze up continuously.
            </h1>
            <h1 className="fs-5">
                Since my development timeframe was cut very short (due to summer classes), I hope to pick this project up again one day.
            </h1>
            <ul>
                <li>Full-stack</li>
                <li>Windows Presentation Foundation Framework</li>
                <li>Third-party WPF libraries</li>
            </ul>
            <h1 className="fs-5"><a href="https://github.com/isaacy13/Metis-Tiles" style={{fontWeight: 500}}>Check out the repo</a></h1>
        </div>;

    let skills = ["C#", ".NET", "XAML", "LiteDB", "Windows"];
    return(
        <ProjectsContentTemplate 
            name="Metis Tiles" 
            skills={skills}
            description={desc}/>
    );
}

export function PhotoRouletteBot() {
    let desc = 
        <div>
            <h1 className="fs-5">
                This project was made for a Discord Bot competition in <i>Aggie Coding Club</i>. 
            </h1>

            <h1 className="fs-5"> 
                This bot randomly selected an image from a pool of pictures sent by players. 
                Showing the selected picture in chat, everyone would take turns guessing whose picture it was.
            </h1>

            <ul>
                <li>Scripted bot & hosted on Discord's servers</li>
                <li>Placed second overall</li>
            </ul>

            <h1 className="fs-5"><a href="https://github.com/isaacy13/discord-photoroulette-bot" style={{fontWeight: 500}}>Check out the repo</a></h1>
        </div>;

    let skills = ["Python", "APIs"];
    return(
        <ProjectsContentTemplate 
            name="Photo Roulette Bot" 
            skills={skills}
            description={desc}/>
    );
}

export function StudyBuddy() {
    let desc = 
        <div>
            <h1 className="fs-5">
                The Study Buddy App was the first project I worked on as a team (as a part of <i>Aggie Coding Club</i>). 
            </h1>

            <h1 className="fs-5">
                Originally, the idea had originated from a hackathon: notes that you take on paper should be easily
                transferred to a digital format and could potentially be automatically organized.
            </h1>

            <ul>
                <li>Full-stack</li>
                <li>Worked with PM & OCR team to develop interface</li>
            </ul>

            <h1 className="fs-5"><a href="https://github.com/aggie-coding-club/Study-Buddy" style={{fontWeight: 500}}>Check out the repo</a></h1>
        </div>

    let skills = ["Java", "Android Studio", "XML"];
    return(
        <ProjectsContentTemplate 
            name="Study Buddy" 
            skills={skills}
            description={desc}/>
    );
}

export function HTTPClient() {
    let desc = 
        <div>
            <h1 className="fs-5">
                This project was about implementing <i>wget</i> from scratch. By sending GET requests
                to webpages, the HTML response could be parsed and dumped into a file.
            </h1>

            <ul>
                <li>HTML Request Headers</li>
                <li>TCP Connections</li>
                <li>UNIX System Calls</li>
            </ul>
            <PrivateRepo />
        </div>;

    let skills = ["C++", "Linux API"];
    return(
        <ProjectsContentTemplate 
            name="HTTP Client" 
            skills={skills}
            description={desc}/>
    );
}

export function TCPClientServer() {
    let desc = 
        <div>
            <h1 className="fs-5">
                This project was about implementing communication via TCP in cohesion with multi-threading. As 
                such, it allowed for the communication between two computers with the added bonus of faster performance
                allowed by multiple threads.
            </h1>

            <ul>
                <li>Client-Server model</li>
                <li>TCP Connections</li>
                <li>Multi-threading</li>
                <li>UNIX System Calls</li>
            </ul>
            <PrivateRepo />
        </div>;

    let skills = ["C++", "Linux API", "Multi-threading"];
    return(
        <ProjectsContentTemplate 
            name="TCP Client Server" 
            skills={skills}
            description={desc}/>
    );
}

export function MTIPC() {
    let desc = 
        <div>
            <h1 className="fs-5">
                This project was my first exposure to safe multi-threaded code, and so it was fun (and challenging) trying to debug
                non-deterministic code.
            </h1>

            <ul>
                <li>Named/unnamed pipes, MQs, and SHM IPC</li>
                <li>Thread-safe data structures</li>
                <li>Multi-threading</li>
                <li>UNIX System Calls</li>
            </ul>
            <PrivateRepo />
        </div>;

    let skills = ["C++", "Linux API", "Multi-threading"];
    return(
        <ProjectsContentTemplate 
            name="Multi-Threaded IPC" 
            skills={skills}
            description={desc}/>
    );
}

export function LinuxShell() {
    let desc = 
        <div>
            <h1 className="fs-5">
                This project was implementing a simple Linux shell that supported piping between processes
                (via I/O redirection), background processes, and directory changes.
            </h1>
            <ul>
                <li>I/O redirection</li>
                <li>Background processes</li>
                <li>Directories</li>
                <li>UNIX System Calls</li>
            </ul>
            <PrivateRepo />
        </div>;

    let skills = ["C++", "Linux API"];
    return(
        <ProjectsContentTemplate 
            name="Linux Shell" 
            skills={skills}
            description={desc}/>
    );
}

export function TextPredictor() {
    let desc = 
        <div>
            <h1 className="fs-5">
                Given a wikipedia article (in an HTML-like format), the objective was to use the past
                30 characters to predict the next 10.
            </h1>

            <ul>
                <li>Data pre-processing</li>
                <li>LSTMs</li>
                <li>Increased prediction accuracy from 0.2% (guessing) to ~14.1%</li>
            </ul>
            <PrivateRepo />
        </div>;

    let skills = ["Python", "PyTorch"];
    return(
        <ProjectsContentTemplate 
            name="Text Predictor"
            skills={skills} 
            description={desc}/>
    );
}

export function ClothingIdentifier() {
    let desc = 
        <div>
            <h1 className="fs-5">
                Given a dataset of bitmap images of clothes, the goal was to label new images correctly.
            </h1>

            <ul>
                <li>Data pre-processing</li>
                <li>CNNs</li>
                <li>&gt;90% Accuracy</li>
            </ul>
            <PrivateRepo />
        </div>;

    let skills = ["Python", "PyTorch"];
    return(
        <ProjectsContentTemplate 
            name="Clothing Identifier" 
            skills={skills}
            description={desc}/>
    );
}