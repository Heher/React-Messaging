import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  addMessage: (text: string) => void;
  adding: boolean;
}

const MessageForm = styled.form`
  width: 100%;
  margin-top: 15px;

  input {
    width: 100%;
    height: 35px;
    border: 1px solid #333333;
    border-radius: 4px;
    font-size: 14px;
    margin-top: 15px;
    padding: 5px;
    outline: 0;

    &:focus {
      border: 1px solid #3366ff;
    }
  }
`;

const MessageInput: React.FC<Props> = ({ addMessage, adding }) => {
  const [messageText, setMessageText] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addMessage(messageText);

    setMessageText('');
  };

  return (
    <MessageForm onSubmit={handleSubmit}>
      <input
        type="text"
        value={messageText}
        onChange={(event) => setMessageText(event.target.value)}
        disabled={adding}
      />
    </MessageForm>
  );
};

export default MessageInput;
