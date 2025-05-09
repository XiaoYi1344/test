import React from 'react';

function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>Yo!</h1>
      {unreadMessages.length > 0 && (
        <h2>You got {unreadMessages.length} unread messages!</h2>
      )}
    </div>
  );
}

function App() {
  const messages = ["React", "Re: React", "Re:Re: React"];
  return <Mailbox unreadMessages={messages} />;
}

export default App;
