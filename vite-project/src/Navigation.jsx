import amazona from "./amazona.png";

function Navigation() {
  return (
    <nav className="nav">
      <img style={
        {width:50,height:50}
      } className="nav-logo" src={amazona} alt="Amazon Logo" />

      <input className="nav-search" type="text" placeholder="Search Amazon" />

      <button className="nav-searchBtn">🔍</button>
    </nav>
  );
}

export default Navigation;
