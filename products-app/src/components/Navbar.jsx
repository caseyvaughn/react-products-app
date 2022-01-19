
import { Link } from "react-router-dom";


export default function Navbar() {
  return(
    <div>
      <Link
        className="navbar"
        to={"/"}
        style={{ textDecoration: 'none', color: "black" }}
       >ProductsApp</Link>
  </div>
  )
}
