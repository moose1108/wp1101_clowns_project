import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import Home from './Home';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 500px;s
  margin: auto;
`;

function App() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  )
}

export default App;
