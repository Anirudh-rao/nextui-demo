import { Link } from "@nextui-org/react";
import '../App.css';
function Navbar() {
    return (
      <div className="Navbar">
        <Link href="/">Product</Link>
        <Link href="/cart">Cart</Link>
      </div>
    );
  }
  export default Navbar;