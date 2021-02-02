import { currentUser, friend } from './users';

const existingMessages = [
  {
    id: 'a',
    user: friend,
    text: 'Hey man!'
  },
  {
    id: 'b',
    user: friend,
    text: "What's up?"
  },
  {
    id: 'c',
    user: currentUser,
    text: 'Nothing much! Wanna get some food?'
  },
  {
    id: 'd',
    user: friend,
    text: 'Yeah, starving. Where you wanna go?'
  }
];

export { existingMessages };
