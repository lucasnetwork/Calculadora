import React,{useState} from 'react';
import ContentButtons from './Components/styles/ContentButtons'
import Buttons from './Components/Buttons'
import GlobalStyle from './Components/styles/Global'

function App() {
  return (
    <>
      <GlobalStyle/>
      <div className="App">

        <ContentButtons>
          <Buttons/>
        </ContentButtons>
      </div>
    </>
  );
}

export default App;
