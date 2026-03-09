import React from 'react';

const Message = ({ text, sender }) => {
  return (
    <div className="flex items-center mb-2">
      <div className="w-10 h-10 rounded-full bg-gray-300 mr-2"></div>
      <div className="flex flex-col">
        <p className="text-gray-800">{text}</p>
        <p className="text-gray-600">{sender}</p>
      </div>
    </div>
  );
};

export default Message;
