import { Link } from 'react-router';

const MailboxList = (props) => {

  return (
    <>
      <h2>Mailbox List</h2>
      {props.mailboxes.length < 1 ?
      <p>You haven't created any mailboxes yet.</p> : 
      <ul>
        {props.mailboxes.map((mailbox) => (
          <li key={mailbox._id}>
            <Link to={`/mailboxes/${mailbox._id}`}>
              Mailbox {mailbox._id}
            </Link>
          </li>
        ))}
      </ul>
      }
    </>
  )
}

export default MailboxList;