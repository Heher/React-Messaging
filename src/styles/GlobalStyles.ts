import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #___gatsby {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  div[role="group"][tabindex] {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  input,
  textarea {
    -webkit-appearance: none;
    -webkit-border-radius: 0;
  }
`;

export { GlobalStyle };
