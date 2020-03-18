import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from "styled-components";

import Root from './components/Root';

const root = ReactDOM.createRoot(document.getElementById('root'));
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');

    * {
        paddings: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Open Sans', sans-serif;
    }
`;

root.render(
  <>
    <GlobalStyle />
    <Root />
  </>
);
