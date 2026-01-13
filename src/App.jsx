import { useState } from 'react'
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar.jsx';
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx';
import MailboxForm from './components/MailboxForm/MailboxForm.jsx';
import MailboxList from './components/MailboxList/MailboxList.jsx';
import LetterForm from './components/LetterForm/LetterForm.jsx';
import './App.css'

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  function addBox(newMailbox) {
    newMailbox._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailbox])
  }

  function addLetter(newLetter) {
    setLetters([...letters, newLetter])
  }

  console.log(letters)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/new-letter" element={<LetterForm addLetter={addLetter} mailboxes={mailboxes} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters}/>} />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  )
};

export default App;
