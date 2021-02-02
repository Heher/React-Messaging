import React from 'react';
import styled from 'styled-components';
import { currentUser } from '../data/users';
import type { Message } from '../types/shared';

interface Props {
  message: Message;
}

interface StyleProps {
  $isUser: boolean;
}

const MessageContainer = styled.div<StyleProps>`
  ${(props) => props.$isUser && `align-self: flex-end;`}

  max-width: 200px;
  padding-bottom: 20px;

  span {
    display: block;
    margin: 0;
    background: ${(props) => (props.$isUser ? `#678fcb;` : `#cccccc`)};
    color: ${(props) => (props.$isUser ? `#f0f0f0;` : `#0a0a0a`)};
    border-radius: 10px;
    font-size: 14px;
    padding: 10px;
  }
`;

const MessageLine: React.FC<Props> = ({ message }) => (
  <MessageContainer $isUser={message.user.id === currentUser.id}>
    <span>{message.text}</span>
  </MessageContainer>
);

export default MessageLine;
