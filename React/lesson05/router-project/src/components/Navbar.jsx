import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="nav-items">
        {/* <li><Link to='/'>Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li> */}

        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/courses">Courses</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
