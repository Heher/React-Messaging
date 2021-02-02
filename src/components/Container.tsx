import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import type { Message } from '../types/shared';
import MessageLine from './MessageLine';
import { existingMessages } from '../data/messages';
import { currentUser } from '../data/users';
import MessageInput from './MessageInput';

import spinner from '../images/pulse.gif';

const Modal = styled.div`
  padding: 30px;
  background: #ffffff;
  box-shadow: 1px 1px 6px #999999;
  border-radius: 4px;
  width: 450px;

  h1 {
    grid-area: header;
    margin: 0 0 30px 0;
    font-size: 24px;
  }
`;

const MessagesList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 400px;
  background: #efefef;
  border: 1px solid #999999;
  border-radius: 4px;
  padding: 10px;
  overflow-y: scroll;
`;

const StyledSpinner = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
`;

const Placeholder = styled.div`
  display: block;
  margin: 0;
  background: #cccccc;
  border-radius: 10px;
  padding: 10px;
  align-self: flex-end;
  max-width: 200px;
  padding-bottom: 20px;
  width: 60px;
  height: 37px;
`;

const Container: React.FC = () => {
  const [messagesLoading, setMessagesLoading] = useState(true);
  const [messageAdding, setMessageAdding] = useState(false);
  const [messageList, setMessageList] = useState<Message[]>([]);

  const messagesListRef = useRef(null);

  const addMessage = (text: string) => {
    setMessageAdding(true);

    setTimeout(() => {
      const newMessageList = [...messageList];

      newMessageList.push({
        id: nanoid(),
        user: currentUser,
        text
      });

      setMessageList(newMessageList);

      setMessageAdding(false);
    }, 300);
  };

  useEffect(() => {
    setTimeout(() => {
      setMessageList(existingMessages);
      setMessagesLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (messagesListRef?.current) {
      messagesListRef.current.scrollTop = messagesListRef.current.scrollHeight;
    }
  }, [messageList]);

  return (
    <Modal>
      <h1>Messages</h1>
      <MessagesList ref={messagesListRef}>
        {messagesLoading ? (
          <StyledSpinner src={spinner} />
        ) : (
          messageList.map((message) => <MessageLine key={message.id} message={message} />)
        )}
        {messageAdding && <Placeholder />}
      </MessagesList>
      <MessageInput addMessage={addMessage} adding={messageAdding} />
    </Modal>
  );
};

export default Container;
