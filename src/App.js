import './App.css';
import Router from './routing/Router'
import {ChakraProvider, } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
     <ChakraProvider>
       <ToastContainer/>
     <Router/>
     </ChakraProvider>
    </div>
  );
}

export default App;
