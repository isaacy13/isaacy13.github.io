import './Service.css';

function Service() {
  return (
    <div id="Service" className="vert-center">
      <div className="content" style={{ opacity:0 }}>
        <div className="scroll">
          <h1 className="display-4 bold">Eagle Scout Project</h1>
          <h2 className="display-6">Boy Scouts of America</h2>
          <img src="resources/images/fence.svg" width="100%"/>
          <div>
            <p className="fs-4">My Eagle Scout Project was neat because I got to lead a team of other scouts to build a fence for my old school.</p>
            <p className="fs-4">Although designing the curvy fence along with planning material logistics was a bit of a pain, I was happy with how it turned out.</p>
            <p className="fs-4">All of this was made possible with the contributions of local wood businesses we received donations from. Overall, in retrospect, it was a great experience to have undergone.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;