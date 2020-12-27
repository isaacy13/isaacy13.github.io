import './App.css';
function App() {
  return (
    <div className="centerDiv" id="prezi">
      <div>
        <h1 className="flyInAnimationByLetter" id="name">ISAAC YEANG</h1>
      </div>
      <div>
        <h1 className="fadeInAnimationByWord" id="presenting">PRESENTING</h1>
      </div>
      <div>
        <h2 className="zoomInAnimationByWord" id="placeholder">PLACEHOLDER</h2>
      </div>
      <br></br>
      <div>
        <button id="skipButton" className="fadeSkipButtonIn"></button>
      </div>
    </div>
  );
}

export default App;
