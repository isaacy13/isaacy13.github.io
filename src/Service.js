import './Service.css';

function Service() {
  return (
    <div id="Service" className="vert-center">
      <div id="service-card" className="scroll content">
        <div className="vert-center scroll" style={{ width: "95%", margin: "auto" }}>
            <div style={{ width: "80%", margin: "auto", marginBottom: "20px" }}>
              <h1 className="display-4 bold">Eagle Scout Project</h1>
              <h2 className="display-6">Boy Scouts of America</h2>
            </div>
            <img src="resources/images/fence.png" />
            <div style={{ width: "80%", margin: "auto" }}>
              <p className="fs-4">Managing the design and construction of a fence for my old middle school allowed me to give back while also developing leadership skills.</p>
              <p className="fs-4">This project was made possible by local companies discounting/donating materials for the project and Troop 949 for helping build the fence.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Service;