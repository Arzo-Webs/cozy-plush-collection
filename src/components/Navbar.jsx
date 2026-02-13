import { NavLink } from "react-router-dom";
export default function Navbar(){
    return(
        <div>
            <nav>
  <NavLink to="/" className="logo">
    Cozy Plush 🧸
  </NavLink>

  <div className="nav-links">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/products">Products</NavLink>
    <NavLink to="/about">About</NavLink>
  </div>
</nav>

        </div>
    )
}