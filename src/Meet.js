import './css/Meet.css';

function Meet() {
  return (
    <div id="Meet">
      <div className="section">
        <div  id="aggieland-card">
          <h1 className="display-4 bold">Nice to Meet You</h1>
          <ul className="list-group">
            <h2 className="list-group-item fs-4">Loving Aggieland <span className="list-image">🏫</span></h2>
            <h2 className="list-group-item fs-4">Full-time opportunities in TX <span className="list-image">👀</span></h2>
            <h2 className="list-group-item fs-4">Excited to meet new people <span className="list-image">🤝</span></h2>
          </ul>
        </div>
        <div style={{ paddingLeft: "5%" }}>
          <img src="resources/images/aggieland.png" id="aggieland" height="50%"/>
        </div>
      </div>
      <div className="section">
        <div style={{ paddingRight: "5%" }}>
          <img src="resources/images/bball.png" id="bball" height="50%"/>
        </div>
        <div id="bball-card" >
          <h1 className="display-4 bold">About Myself</h1>
          <ul className="list-group">
            <h2 className="list-group-item fs-4">Born in Corpus Christi <span className="list-image">🌊</span></h2>
            <h2 className="list-group-item fs-4">Hoops & video games <span className="list-image">🏀</span></h2>
            <h2 className="list-group-item fs-4">Hackathons and CTFs<span className="list-image">🎉</span></h2>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Meet;