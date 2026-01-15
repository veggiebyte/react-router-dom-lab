// src/components/MessageForm/MessageForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MessageForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mailboxId: '',
    recipient: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addMessage(formData);
    navigate(`/mailboxes/${formData.mailboxId}`);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update recipient name when mailbox is selected
  const handleMailboxChange = (e) => {
    const selectedMailboxId = e.target.value;
    const selectedMailbox = props.mailboxes.find(
      mailbox => mailbox._id === selectedMailboxId
    );
    
    setFormData({
      ...formData,
      mailboxId: selectedMailboxId,
      recipient: selectedMailbox ? `${selectedMailbox.firstName} ${selectedMailbox.lastName}` : ''
    });
  };

  return (
    <main>
      <h2>Send Message to Resident</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Select Mailbox:</label>
        <select
          id="mailboxId"
          name="mailboxId"
          value={formData.mailboxId}
          onChange={handleMailboxChange}
          required
        >
          <option value="">-- Select a Mailbox --</option>
          {props.mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              Box {mailbox._id} - {mailbox.firstName} {mailbox.lastName}
            </option>
          ))}
        </select>

        <label htmlFor="recipient">Recipient Name:</label>
        <input
          type="text"
          id="recipient"
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
          required
          readOnly
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          placeholder="e.g., Package ready for pickup at office, Rent payment due on 1st, Maintenance scheduled for Monday..."
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </main>
  );
};

export default MessageForm;