import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    buildingNumber: '',
    unitNumber: '',
    boxSize: 'Standard'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBox(formData);
    navigate('/mailboxes');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main>
      <h2>Register New Resident</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="buildingNumber">Building Number:</label>
        <input
          type="text"
          id="buildingNumber"
          name="buildingNumber"
          value={formData.buildingNumber}
          onChange={handleChange}
          placeholder="e.g., 33"
          required
        />

        <label htmlFor="unitNumber">Unit Number:</label>
        <input
          type="text"
          id="unitNumber"
          name="unitNumber"
          value={formData.unitNumber}
          onChange={handleChange}
          placeholder="e.g., 101B"
          required
        />

        <label htmlFor="boxSize">Mailbox Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option value="Standard">Standard</option>
          <option value="Medium">Medium (+$5/month)</option>
          <option value="Large">Large (+$10/month)</option>
        </select>

        <button type="submit">Register Resident</button>
      </form>
    </main>
  );
};

export default MailboxForm;