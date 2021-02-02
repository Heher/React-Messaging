import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyles';

import background from '../images/geometric-leaves.png';

const OuterWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  width: 100%;
  height: 100vh;
  background-image: url(${background});
`;

const Layout: React.FC = ({ children }) => (
  <OuterWrapper>
    <GlobalStyle />
    {children}
  </OuterWrapper>
);

export default Layout;
