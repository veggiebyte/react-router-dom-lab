import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === mailboxId
  );

  if (!selectedBox) {
    return <main><h2>Mailbox Not Found!</h2></main>;
  }

  return (
    <main>
      <h2>Resident Mailbox Details</h2>
      <div>
        <p><strong>Mailbox Number:</strong> {selectedBox._id}</p>
        <p><strong>Resident Name:</strong> {selectedBox.firstName} {selectedBox.lastName}</p>
        <p><strong>Email:</strong> {selectedBox.email}</p>
        <p><strong>Phone:</strong> {selectedBox.phoneNumber}</p>
        <p><strong>Building:</strong> {selectedBox.buildingNumber}</p>
        <p><strong>Unit:</strong> {selectedBox.unitNumber}</p>
        <p><strong>Mailbox Size:</strong> {selectedBox.boxSize}</p>
      </div>
    </main>
  );
};

export default MailboxDetails;