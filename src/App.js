import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './web/Header'
import Dropdown from './dropdwon'

function App() {

  const[loading,setloading]=useState(true); //pre-loader before page renders

  useEffect(()=>{
    setTimeout(() => {
      setloading(false)
    }, 2000);
  })
  return (
    <>
    {
      loading?
   
 
       <div className="App">
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    :
    <>
    <Dropdown/> 
    <Header/>
    </>
}
</>

  );
}

export default App;
