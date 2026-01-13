import { useParams } from 'react-router';

const MailboxDetails = (props) => {

  const { mailboxId } = useParams();

  const selectedMailbox = props.mailboxes.find((mailbox) => (
    mailbox._id === Number(mailboxId)
  ));

  const associatedLetters = props.letters.filter((letter) => (
    letter.mailboxId == mailboxId
  ))

  console.log(associatedLetters)

  return (
    <>
      {selectedMailbox ?
      <>
        <h2>Mailbox {selectedMailbox._id}</h2>
        <dl>
          <dt>Owner: </dt>
          <dd>{selectedMailbox.boxOwner}</dd>
          <dt>Size:</dt>
          <dd>{selectedMailbox.boxSize}</dd>
        </dl>
        <h3>Letters</h3>
        <dl>
          {associatedLetters.map((letter) => (
            <>
              <dt>Dear {letter.recipient},</dt>
              <dd>{letter.message}</dd>
              <br></br>
            </>
          ))}
        </dl>
      </>
      : <p>Mailbox not found</p>
      }
    </>
  );
};

export default MailboxDetails;