import './Meet.css';

function Meet() {
  return (
    <div id="Meet">
      <div className="section">
        <div style={{ opacity: 0 }} id="aggieland-card">
          <h1 className="display-4 bold">Nice to Meet You</h1>
          <div className="content">
                <h2 className="fs-4">Currently loving Aggieland 🏫</h2>
                <h2 className="fs-4">Thrilled about exploring other cities 🌆</h2>
                <h2 className="fs-4">Excited to meet new people 🤝</h2>
          </div>
        </div>
        <div style={{ paddingLeft: "5%" }}>
          <img src="resources/images/aggieland.svg" id="aggieland" height="50%" style={{ transform: "scale(0)" }}/>
        </div>
      </div>
      <div className="section">
        <div style={{ paddingRight: "5%" }}>
          <img src="resources/images/bball.svg" id="bball" height="50%" style={{ transform: "scale(0)" }}/>
        </div>
        <div id="bball-card" style={{ opacity: 0 }}>
          <h1 className="display-4 bold">About Myself</h1>
          <div className="content">
                <h2 className="fs-4">Born and raised in Corpus Christi 🌊</h2>
                <h2 className="fs-4">Flour Bluff High School (c/o 2020) 👨‍🎓</h2>
                <h2 className="fs-4">HS hoops & recreational 🏀</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meet;