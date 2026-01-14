// src/components/NavBar/NavBar.jsx
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <span>🏠</span> Home
      </Link>
      <Link to="/mailboxes">
        <span>📬</span> Resident Mailboxes
      </Link>
      <Link to="/new-mailbox">
        <span>👤</span> New Resident
      </Link>
    </nav>
  );
};

export default NavBar;