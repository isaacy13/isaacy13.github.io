import { buildQueries } from '@testing-library/react';
import './ProjectsContent.css';

function ProjectsContentTemplate(props) {
    let colors = ["purple-blue", "purple-red", "purple-teal", "purple-pink", "purple-black"];
    let selection = Math.floor(Math.random() * ((colors.length)-0) + 0);
    let backdrop = colors[selection];

    if(typeof backdrop == 'undefined')
        backdrop = colors[0];

    return(
        <div className="content" style={{ width: "100%" }}>
            <div className="scroll" style={{ padding: "10px" }}>
                <div className={`project-image section ${backdrop}`}>
                    <h1 className="project-title fs-1 bold">{ props.name }</h1>
                </div>

                <div className="section project-description" style={{ display: "block" }}>
                    {props.skills.map((skill, index) =>
                        <div className={`section skill ${backdrop}`} key={index} style={{ marginRight: index === props.skills.length-1 ? '0' : '5px' }}>
                                <h1 className="fs-4 bold">{ skill }</h1>
                        </div>
                    )}
                </div>

                <div className="project-description">
                    { props.description }
                </div>
            </div>
        </div>
    );
}

function PrivateRepo() {
    return(
        <h1 className="fs-5 private">
            For academic honor code reasons, this repo is <span style={{textDecoration: "underline"}}>private</span>.
        </h1>
    );
}

export function GeoEats() {
    let desc = 
        <div>
            <h1 className="fs-5">
                Geo Eats was an idea born after wasting hours driving around cities, deciding on a spot to eat -- make deciding
                on a recipe / restaurant instantaneous. 
            </h1>
            <h1 className="fs-5">
               Made for a class group project, Geo Eats was interesting to implement as it exposed me to the Agile development
               methodology.
            </h1>
            <h1 className="fs-5">
                Although the product came out differently from what I had envisioned, I am proud of what our team accomplished.
                However, I do wish we had a few more weeks to implement certain features and fix other bugs.
            </h1>
            <h1 className="fs-5">
                Did I mention it works for groups?
            </h1>

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

    let skills = ["Flask", "HTML", "CSS", "APIs", "Agile", "PostgreSQL"];

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
                JIRAS Movies (named by mashing our first initials together) was a class group project in which we were tasked with
                creating recommendation queries, along with a corresponding GUI.
            </h1>
            <h1 className="fs-5">
                Overall, this project was great as it exposed me to a new cross-platform framework (Java Swing) and a new development 
                methodology (Waterfall).
            </h1>
            <PrivateRepo />
        </div>;

    let skills = ["Java", "Swing", "Waterfall", "PostgreSQL"];
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
            <h1 className="fs-5"><a href="https://github.com/isaacy13/Metis-Tiles" style={{fontWeight: 500}}>Check out the repo</a></h1>
        </div>;

    let skills = ["C#", ".NET", "XAML"];
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
                This bot allowed players to send in pictures from which the bot would randomly select from. 
                Showing the selected picture in chat, everyone would take turns guessing whose picture it was.
            </h1>

            <h1 className="fs-5">
                This project was fun because it my first coding competition (ended up second place with a cool keyboard). 
            </h1>

            <h1 className="fs-5">
                This project increased my interest in code (freshman year where I hadn't declared a major). 
            </h1>

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
                The Study Buddy App was the first project I worked on as a team (as a part of Aggie Coding Club). 
            </h1>

            <h1 className="fs-5">
                Originally, the idea had originated from a hackathon: notes that you take on paper should be easily
                transferred to a digital format and could potentially be automatically organized.
            </h1>

            <h1 className="fs-5">
                I thought the idea was really cool, so I joined the group as part of the front-end team. 
                There, I helped developed the majority of the front-end and communicated with the project 
                manager & OCR team, seeing what they needed.
            </h1>

            <h1 className="fs-5">
                Overall, one of my favorites, as working with other like-minded people was really cool (especially during the pandemic).
            </h1>

            <h1 className="fs-5"><a href="https://github.com/aggie-coding-club/Study-Buddy" style={{fontWeight: 500}}>Check out the repo</a></h1>
        </div>;

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
                This project was basically implementing <i>wget</i> from scratch. By sending GET requests
                to webpages, the HTML response could be parsed and dumped into a file.
            </h1>

            <h1 className="fs-5">
                I really enjoyed this project as it gave me a sense of how <i>wget</i> could have been
                implemented using Linux System Calls. From this, I also learned how HTML requests work
                as well as how to send them via TCP.
            </h1>
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
                This project was basically implementing communication via TCP in cohesion with multi-threading. As 
                such, it allowed for the communication between two computers with the added bonus of faster performance
                allowed by multiple threads.
            </h1>

            <h1 className="fs-5">
                I put everything I learned in <i>CSCE 313: Intro to Computer Systems</i> together in this project. It was
                also the first project I had true "Client-Server" communication (meaning on completely different computers).
            </h1>
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

            <h1 className="fs-5">
                It was essentially the same as "Pipes, MQs, & SHM IPC", but with multiple threads.
                Additionally, it was my first exposure to thread-safe data structures like "Bounded Buffers".
            </h1>

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

export function IPC() {
    let desc = 
        <div>
            <h1 className="fs-5">
                This project was essentially the same as <i>Client-Server IPC via Named Pipes</i>, but implemented
                with other IPC methods (message queues and shared memory).
            </h1>
            <h1 className="fs-5">
                I found this project interesting, especially when observing the runtimes of using each method and 
                seeing the pros and cons of each method.
            </h1>
            <PrivateRepo />
        </div>;

    let skills = ["C++", "Linux API"];
    return(
        <ProjectsContentTemplate 
            name="FIFO, MQs, & SHM IPC" 
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
            <h1 className="fs-5">
                I really enjoyed this project because it demystified shells for me and brought me a greater 
                understanding of what goes on behind the scenes whenever I type into the terminal.
            </h1>
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

export function PipeIPC() {
    let desc = 
        <div>
            <h1 className="fs-5">
                This project was my introduction into Linux's System Calls -- the purpose was to
                allow processes to talk to each other via a Named Pipe / FIFO.
            </h1>
            <h1 className="fs-5">
                I consider this super valuable as I built other projects based on what I learned in
                this project.
            </h1>
            <PrivateRepo />
        </div>;

    let skills = ["C++", "Linux API"];
    return(
        <ProjectsContentTemplate 
            name="Pipe IPC" 
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
            <h1 className="fs-5">
                I found this project really cool as I was able to increase the prediction accuracy from 
                0.2% (guessing) to ~14.1% using LSTMs.
            </h1>
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
            <h1 className="fs-5">
                Using CNNs, I was able to achieve an accuracy upwards of 90%.
            </h1>
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