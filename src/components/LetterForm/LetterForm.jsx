import { useNavigate } from 'react-router';
import { useState } from 'react';

const initialState = {
  mailboxId: '',
  recipient: '',
  message: '',
};

const LetterForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

   const selectedMailbox = props.mailboxes.find((mailbox) => (
    mailbox._id === Number(formData.mailboxId)
  ));

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addLetter(formData);
    setFormData(initialState);
    navigate(`/mailboxes/${selectedMailbox._id}`);
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData,
        [target.name]: target.value,
        recipient: (selectedMailbox?.boxOwner ? selectedMailbox.boxOwner : '')
    });
  };

  return (
    <main>
      <h2>New Letter</h2>
      {props.mailboxes.length > 0 ?
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Select a Mailbox:</label>
        <select
          name="mailboxId"
          id="mailboxId"
          value={formData.mailboxId}
          onChange={handleChange}
          >
          <option value="" disabled hidden>Choose a mailbox</option>
          {props.mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
            Mailbox {mailbox._id}
            </option>
          ))}
        </select>
        <label htmlFor="recipient">Recipient:</label>
        <input
          type="text"
          name="recipient"
          id="recipient"
          value={selectedMailbox?.boxOwner ? selectedMailbox.boxOwner : ''}
          onChange={handleChange}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}></textarea>
        <button type="submit" disabled={!formData.mailboxId}>Submit</button>
      </form>
      : <p>There aren't any mailboxes yet. Create a mailbox to send a letter</p>
      }
    </main>
  );
};

export default LetterForm;

