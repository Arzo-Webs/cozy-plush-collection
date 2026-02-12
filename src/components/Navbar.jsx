import { NavLink } from "react-router-dom";
export default function Navbar(){
    return(
        <div>
            <nav>
                <NavLink to="/" style={({ isActive }) => ({
    color: isActive ? "red" : "black"
  })} >Home</NavLink>{"|"}
                  <NavLink to="/products" style={({ isActive }) => ({
    color: isActive ? "red" : "black"
  })} >Products</NavLink>{"|"}
            </nav>
        </div>
    )
}