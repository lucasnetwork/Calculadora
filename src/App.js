import React,{useState} from 'react';

import ContentButtons from './Components/styles/ContentButtons'
import AppContent from './Components/styles/AppContent'

import Buttons from './Components/Buttons'
import ShowOperation from './Components/ShowOperation'

import GlobalStyle from './Components/styles/Global'

function App() {
  const [currentValue,setCurrentValue] = useState('0')
  const [previousValue,setPreviousValue] = useState('0')
  const [currentOperation,setCurrentOperation] = useState('')
  return (
    <>
      <GlobalStyle/>
      <AppContent>
        <div className="content">
          <ShowOperation 
            currentValue={currentValue} 
            currentOperation={currentOperation}
          />
          <ContentButtons >
            <Buttons 
              setCurrentValue={setCurrentValue} 
              setCurrentOperation={setCurrentOperation}
              previousValue={previousValue}
              setPreviousValue={setPreviousValue}
              currentOperation={currentOperation}
              currentValue={currentValue}
            />
          </ContentButtons>
        </div>
      </AppContent>
    </>
  );
}

export default App;
