import { Link } from 'react-router-dom';

const MailboxList = (props) => {
  return (
    <main>
      <h2>Resident Mailbox Directory</h2>
      <div className="mailbox-grid">
        {props.mailboxes.map((mailbox) => (
          <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
            <div className="mail-box">
              <p><strong>Box #{mailbox._id}</strong></p>
              <p>{mailbox.firstName} {mailbox.lastName}</p>
              <p>Size: {mailbox.boxSize}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default MailboxList;