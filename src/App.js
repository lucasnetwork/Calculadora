import React,{useState} from 'react';
import ContentButtons from './Components/styles/ContentButtons'
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
      <div className="App">
        <div className="content">
          <ShowOperation 
            currentValue={currentValue} 
            currentOperation={currentOperation} 
            setCurrentOperation={setCurrentOperation}
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
      </div>
    </>
  );
}

export default App;
