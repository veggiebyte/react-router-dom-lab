// src/components/NavBar/NavBar.jsx
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        Home
      </Link>
      <Link to="/mailboxes">
        Resident Mailboxes
      </Link>
      <Link to="/new-mailbox">
        New Resident
      </Link>
    </nav>
  );
};

export default NavBar;