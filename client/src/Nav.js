import { Link } from "react-router-dom";

function Nav({setIsAuthenticated, setUser, user}) {

    const logout = () => {
        fetch('/logout',{
            method:'DELETE'
        })
        .then(()=>{
            setIsAuthenticated(false)
            setUser(null)
        })
    }
  return (
    <header className="header sticky sticky--top js-header">
      <div className="grid">
        <nav className="navigation">
            <h1 className="Tittle"> Your Dashboard </h1>
          <ul className="navigation__list navigation__list--inline">
            <Link to="/userName/followers" className="SaveButton">
              Followers
            </Link>
            <Link to="/userName/following" className="SaveButton">
              Following
            </Link>
            <Link to="/newreview" className="SaveButton">
              New Review
            </Link>
            <Link to="/userName" className="SaveButton">
              Home
            </Link>

          <button onClick={logout} className="SaveButton">Logout</button>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
