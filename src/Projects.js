import react from 'react';
import './css/Projects.css';
import {FOGSHHBridge, FOGSHHNative, SAIFDClubSite, PersonalWebsite, GeoEats, MovieRecommender, MetisTiles, PhotoRouletteBot, StudyBuddy, HTTPClient, TCPClientServer, MTIPC, LinuxShell, TextPredictor, ClothingIdentifier} from './ProjectsContent';

class Project {
  constructor(title, content_type, image_url="") {
    this.title = title;
    this.content_type = content_type;
    this.image_url = image_url;
  }
}

export default class Projects extends react.Component {
  constructor(props) {
    super(props);

    this.default_project_titles = ["Apps", "Linux", "ML"];
    this.default_project_aliases = ["Apps", "Linux", "ML"];
    this.default_projects = ["FOGSHHBridge", "HTTPClient", "TextPredictor"];

    this.default_project_type_selected = this.default_project_aliases[0];
    this.default_project_selected = this.default_projects[0];

    this.project_type = this.default_project_type_selected; // default to display "Apps"
    this.content_type = this.default_project_selected; // default to "GeoEats"

    this.previous_project_type = this.default_project_type_selected; // keep track of previously selected items to get rid of class
    this.previous_content_type = this.default_project_selected;

    this.TemplateProjects = this.TemplateProjects.bind(this);
    this.AppsProjects = this.AppsProjects.bind(this);
    this.LinuxProjects = this.LinuxProjects.bind(this);
    this.MLProjects = this.MLProjects.bind(this);
    this.ContentSelect = this.ContentSelect.bind(this);
    this.SetContent = this.SetContent.bind(this);
    this.ProjectSelect = this.ProjectSelect.bind(this);
    this.SetProject = this.SetProject.bind(this);
    this.ProjectTypes = this.ProjectTypes.bind(this);
    this.render = this.render.bind(this);
  }

  TemplateProjects(props) {
    return (
      <div className="scroll">
        {props.projects.map((project, index) =>
          <div className={`icon section selector ${!index ? "selected" : ""}`} key={project.content_type} id={project.content_type} onClick={() => this.SetContent(project.content_type)}>
            <h1 className="fs-4">{project.title}</h1>
          </div>
        )}
      </div>
    );
  }

  AppsProjects() {
    let titles = [
      "FOGS HH Bridge",
      "FOGS HH Native",
      "SAIFD Club Site",
      "Personal Website",
      "Geo Eats",
      "Movie Recommender",
      "Metis Tiles",
      "Photo Roulette Bot",
      "Study Buddy"
    ];

    let aliases = [
      "FOGSHHBridge",
      "FOGSHHNative",
      "SAIFDClubSite",
      "PersonalWebsite",
      "GeoEats",
      "MovieRecommender",
      "MetisTiles",
      "PhotoRouletteBot",
      "StudyBuddy"
    ];

    let projects = this.CreateProjects(titles, aliases);

    return (
      <this.TemplateProjects projects={projects} />
    );
  }

  LinuxProjects() {
    let titles = [
      "HTTP Client",
      "Multi-threaded (TCP) Client-Server App",
      "Multi-threaded IPC",
      "Linux Shell"
    ];

    let aliases = [
      "HTTPClient",
      "TCPClientServer",
      "MTIPC",
      "LinuxShell"
    ];

    let projects = this.CreateProjects(titles, aliases);

    return (
      <this.TemplateProjects projects={projects} />
    );
  }

  MLProjects() {
    let titles = [
      "Text Predictor",
      "Clothing Identifier"
    ];

    let aliases = [
      "TextPredictor",
      "ClothingIdentifier"
    ];

    let projects = this.CreateProjects(titles, aliases);

    return (
      <this.TemplateProjects projects={projects} />
    );
  }

  // render based on content_type
  ContentSelect() {
    let content_type = this.content_type;

    if (content_type === "FOGSHHBridge")
      return <FOGSHHBridge />
    else if (content_type === "FOGSHHNative")
      return <FOGSHHNative />
    else if (content_type === "SAIFDClubSite")
      return <SAIFDClubSite />
    else if (content_type === "PersonalWebsite")
      return <PersonalWebsite />
    else if (content_type === "GeoEats")
      return <GeoEats />;
    else if (content_type === "MovieRecommender")
      return <MovieRecommender />;
    else if (content_type === "MetisTiles")
      return <MetisTiles />;
    else if (content_type === "PhotoRouletteBot")
      return <PhotoRouletteBot />;
    else if (content_type === "StudyBuddy")
      return <StudyBuddy />;
    else if (content_type === "HTTPClient")
      return <HTTPClient />;
    else if (content_type === "TCPClientServer")
      return <TCPClientServer />;
    else if (content_type === "MTIPC")
      return <MTIPC />;
    else if (content_type === "LinuxShell")
      return <LinuxShell />;
    else if (content_type === "TextPredictor")
      return <TextPredictor />;
    else if (content_type === "ClothingIdentifier")
      return <ClothingIdentifier />;
  }

  // set state and update member variable... automatically re-renders
  SetContent(type, switching_projects = false) {
    this.content_type = type;
    this.setState({content_type : type});

    document.getElementById(this.previous_content_type).classList.remove("selected");
    this.previous_content_type = type;

    if (!switching_projects)
      document.getElementById(type).classList.add("selected");
  }

  // render based on project_type
  ProjectSelect() {
    let project_type = this.project_type;
    
    if(project_type === "Apps")
      return this.AppsProjects();
    else if (project_type === "Linux")
      return this.LinuxProjects();
    else
      return this.MLProjects();
  }

  // set state and update member variable... automatically re-renders
  SetProject(type) {    
    this.previous_project_type = this.project_type;
    this.setState({previous_project_type : this.project_type});
    
    this.project_type = type;
    this.setState({project_type : type});

    document.getElementById(this.previous_project_type).classList.remove("selected");
    document.getElementById(type).classList.add("selected");

    for (let i = 0; i < this.default_project_aliases.length; i++) {
      let project_type = this.default_project_aliases[i];
      if (type === project_type) {
        this.default_project_selected = this.default_projects[i];
        this.setState({default_project_selected : this.default_projects[i]});
        break;
      }
    }

    let updateProject = this.previous_project_type !== this.project_type;
    this.SetContent(this.default_project_selected, updateProject);
  }

  // project type examples: Apps, Linux, ML, etc.
  CreateProjects(titles, aliases, image_urls = []) {
    if (titles.length !== aliases.length) {
      console.log("Error in creating project type -- bad input lengths");
      return;
    }
    
    let projects = [];

    if (image_urls.length > 0) {
      
      for(let i = 0; i < titles.length; i++) {
        let project = new Project(titles[i], aliases[i], image_urls[i]);
        projects.push(project);
      }

    } else {

      for(let i = 0; i < titles.length; i++) {
        let project = new Project(titles[i], aliases[i]);
        projects.push(project);
      }

    }

    return projects;
  }

  // render based on these lists
  ProjectTypes() {
    let titles = this.default_project_titles;
    let aliases = this.default_project_aliases;
    let image_urls = ["resources/images/laptop.svg", "resources/images/linux.svg", "resources/images/neural_net.svg"];

    let project_types = this.CreateProjects(titles, aliases, image_urls);

    return(
      <div className="content scroll" id="project-selector-content">
        {project_types.map((project, index) =>
          <div className={`icon section selector ${!index ? "selected" : ""}`} id={project.content_type} key={project.content_type} onClick={() => {this.SetProject(project.content_type);}}>
            <img src={project.image_url} />
            <h2 className="fs-3">{project.title}</h2>
          </div>
        )}
      </div>
    );
  }
  
  // what to render
  render() {
    return(
      <div id="Projects" className="vert-center">
        <div className="section">
          <div id="project-selector">
            <div className="section content" id="project-header">
              <h1 className="display-4 bold" style={{margin: 0}}>Projects</h1>
            </div>
            <this.ProjectTypes />
          </div>

          <div style={{display: "flex", width: "100%"}}>
            <div className="content scroll" id="project-list">
              {this.ProjectSelect()}
            </div>

            <div id="project-content">
              {this.ContentSelect()}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

// export default Projects;