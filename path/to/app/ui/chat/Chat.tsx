import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Button } from '@headlessui/react';
import { Message } from './Message';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const sendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>Abrir chat</Button>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Chat</DialogTitle>
        <DialogContent>
          <div>
            {messages.map((message, index) => (
              <Message key={index} text={message.text} sender={message.sender} />
            ))}
          </div>
          <input
            type="text"
            value=""
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
          />
          <Button onClick={() => sendMessage(message)}>Enviar</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Chat;
