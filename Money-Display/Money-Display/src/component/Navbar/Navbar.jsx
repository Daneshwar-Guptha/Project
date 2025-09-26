import { Link } from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const MoneyBalance = useSelector((store) => store.MoneyBalancer.BalanceMoney); 

  const NavLinks = [
    { name: "Home", path: "/Home" },
    { name: "Cart", path: "/art" }
  ];

  return (
    <nav className="navbar">
        <h3>MoneyConverter:  ₹{MoneyBalance}  </h3>
    
      <ul className="nav-links">
        {NavLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      
    </nav>
  );
}

export default Navbar;
