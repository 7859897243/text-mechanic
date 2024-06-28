import { useState } from 'react';
import './App.css';
import Navbar from './components2/Navbar';
import TextForm from './components2/TextForm';
import Alert from './components2/Alert';
import Privacypolicy from './components2/privacypolicy.jsx';


function App() {


  const [mode, setMode] = useState('light'); 

  const [btnText, newbtnText] = useState('Enable Dark Mode');

  const [alert, setAlert] = useState (null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = 'black';
      document.body.style.color= 'white';
      newbtnText('Enable to Dark Mode');
      showAlert("Dark Mode Has Been Enable", "success")
      setInterval(() => {
        document.title = 'SIT - Admisson '
      }, 2000);
      setInterval(() => {
        document.title = 'SIT - Bsc    it'
      }, 1500);
    } else {
      setMode('light')
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      newbtnText('Enable to Light Mode');
      showAlert("Light Mode Has Been Enable", "success")
    }
  }
  return (
    <>
      <Navbar title="Tech-mechanic" aboutText="" mode={mode} toggleMode={toggleMode} btntext={btnText}></Navbar>
      <Alert alert={alert}/> 
      <TextForm heading="Enter Text to Analyse Below" mode={mode} toggleMode={toggleMode} showAlert={showAlert}></TextForm>
      {/* <Privacypolicy /> */}
    </>
  );
}

export default App;
