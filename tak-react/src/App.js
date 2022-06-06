import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name = "Wontak Lee" color = "blue"/>
      <Hello color = "magenta"/>
    </Wrapper>
  );
}

export default App;