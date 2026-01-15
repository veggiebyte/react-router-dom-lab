// src/components/MailboxDetails/MailboxDetails.jsx
import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === mailboxId
  );

  const selectedMessages = props.messages.filter(
    (message) => message.mailboxId === mailboxId
  );

  if (!selectedBox) {
    return (
      <main>
        <h2>Mailbox Not Found!</h2>
        <p>The mailbox you're looking for doesn't exist in our system.</p>
      </main>
    );
  }

  return (
    <main>
      <h2>Resident Mailbox Details</h2>
      <div className="details-container">
        <p><strong>Mailbox Number:</strong> {selectedBox._id}</p>
        <p><strong>Resident Name:</strong> {selectedBox.firstName} {selectedBox.lastName}</p>
        <p><strong>Email:</strong> {selectedBox.email}</p>
        <p><strong>Phone:</strong> {selectedBox.phoneNumber}</p>
        <p><strong>Building:</strong> {selectedBox.buildingNumber}</p>
        <p><strong>Unit:</strong> {selectedBox.unitNumber}</p>
        <p><strong>Mailbox Size:</strong> {selectedBox.boxSize}</p>
      </div>

      <div className="messages-section">
        <h3>Messages for this Resident</h3>
        {selectedMessages.length === 0 ? (
          <p className="no-messages">No messages yet.</p>
        ) : (
          <div className="messages-list">
            {selectedMessages.map((message, index) => (
              <div key={index} className="message-card">
                <p><strong>To:</strong> {message.recipient}</p>
                <p className="message-text">{message.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MailboxDetails;