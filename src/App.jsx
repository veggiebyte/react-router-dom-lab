// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';

const App = () => {
  const [mailboxes, setMailboxes] = useState([
    {
      _id: '33-101B',
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.j@email.com',
      phoneNumber: '412-555-0123',
      buildingNumber: '33',
      unitNumber: '101B',
      boxSize: 'Standard'
    },
    {
      _id: '33-205A',
      firstName: 'Michael',
      lastName: 'Chen',
      email: 'mchen@email.com',
      phoneNumber: '412-555-0456',
      buildingNumber: '33',
      unitNumber: '205A',
      boxSize: 'Large'
    },
    {
      _id: '42-112C',
      firstName: 'Emma',
      lastName: 'Rodriguez',
      email: 'e.rodriguez@email.com',
      phoneNumber: '412-555-0789',
      buildingNumber: '42',
      unitNumber: '112C',
      boxSize: 'Medium'
    },

        {
      _id: '40-160A',
      firstName: 'Peter',
      lastName: 'Wolfe',
      email: 'petew@email.com',
      phoneNumber: '412-555-0789',
      buildingNumber: '40',
      unitNumber: '160A',
      boxSize: 'Large'
    }

  ]);

  const addBox = (formData) => {
    const mailboxId = `${formData.buildingNumber}-${formData.unitNumber}`;
    
    const newMailbox = {
      _id: mailboxId,
      ...formData
    };
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <img src="/images/mailhub_logo.png" alt="MailHub Manager" className="logo" />
        <p className="tagline">
          Apartment Community<br />
          Mail Management System
        </p>
      </header>
      
      <NavBar />
      
      <Routes>
        <Route path="/" element={
          <main className="home-content">
            <p>
              MailHub Manager is a comprehensive mailbox management solution designed specifically 
              for apartment communities and multi-building residential complexes. Our system streamlines 
              mailroom operations, enabling leasing office staff to efficiently track resident mailbox 
              assignments, manage mailbox sizes, and maintain accurate tenant contact information.
            </p>
            <p>
              With MailHub Manager, property management teams can easily register new residents, 
              assign mailboxes based on building and unit numbers, and provide tenants with flexible 
              mailbox size options to accommodate their delivery needs.
            </p>
            <img src="/images/apartment_building.png" alt="Apartment Building" className="home-image" />
          </main>
        } />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </div>
  );
};

export default App;