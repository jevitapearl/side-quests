import logo from "./assets/logo.svg"

function Header(){
  
  return(
    <header>

      <nav className="nav-bar">
        <img id="logo" src={logo} alt="logo" />
        <h2>Claude Chef <span className="clone"></span></h2>
      </nav>

    </header>
  );
}

export default Header

