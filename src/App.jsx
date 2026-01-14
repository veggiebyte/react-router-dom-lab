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
      phoneNumber: '555-0123',
      buildingNumber: '33',
      unitNumber: '101B',
      boxSize: 'Standard'
    },
    {
      _id: '33-205A',
      firstName: 'Michael',
      lastName: 'Chen',
      email: 'mchen@email.com',
      phoneNumber: '555-0456',
      buildingNumber: '33',
      unitNumber: '205A',
      boxSize: 'Large'
    },
    {
      _id: '42-112C',
      firstName: 'Emma',
      lastName: 'Rodriguez',
      email: 'e.rodriguez@email.com',
      phoneNumber: '555-0789',
      buildingNumber: '42',
      unitNumber: '112C',
      boxSize: 'Medium'
    }
  ]);


  const addBox = (formData) => {
    // Create mailbox ID in format: buildingNumber-unitNumber
    const mailboxId = `${formData.buildingNumber}-${formData.unitNumber}`;
    
    const newMailbox = {
      _id: mailboxId,
      ...formData
    };
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Resident Mailbox Management</h1><p>Apartment Complex Mail Center</p></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </>
  );
};

export default App;