import NavBar from "../NavBar/NavBar";

function Resume() {
  return (
    <div className="main-container">
      <div className="navbar-container navbar-class-block">
        <NavBar />
      </div>
      <div
        className="blogs-container"
        style={{ backgroundColor: 'transparent' }}
      >
        <div>
          <h2>My Resume</h2>
        </div>
      </div>
    </div>
  );
}

export default Resume;
