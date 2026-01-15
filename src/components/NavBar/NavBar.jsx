// src/components/NavBar/NavBar.jsx
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img src="/images/home_icon.png" alt="" />
        Home
      </Link>
      <Link to="/mailboxes">
        <img src="/images/mail_icon.png" alt="" />
        Resident Mailboxes
      </Link>
      <Link to="/new-mailbox">
        <img src="/images/person_icon.png" alt="" />
        New Resident
      </Link>
    </nav>
  );
};

export default NavBar;