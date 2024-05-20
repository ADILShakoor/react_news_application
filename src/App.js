import './App.css';

import React, { useState} from 'react'
import Navbar from './components/Navbar';
// import News setProgress={setProgress} apiKey={apiKey}     from './components/News setProgress={setProgress} apiKey={apiKey}    ';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';


const App =()=>  {
  const apiKey = process.env.REACT_APP_NEWS_API;
//   state={
// progress:0
//   }

  const [progress, setProgress] = useState(0);
//   setProgress=(progress)=>{
// setState({progress:progress})
//   }
  
    return (
      <div>
         <LoadingBar
         height={2}
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        
        <Navbar/>
        <Routes>
       
          <Route exect path="/" element={ <News setProgress={setProgress} apiKey={apiKey}   key="general" pageSize={12} country={"us"} category={"general"}/>} />
          <Route exect path="/business" element={<News setProgress={setProgress} apiKey={apiKey}      key="business" pageSize={12} country={"us"} category={"business"}/>} />
          <Route exect path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}      key="entertainment" pageSize={12} country={"us"} category={"entertainment"}/>} />
          {/* <Route exect path="/general" element={<News setProgress={setProgress} apiKey={apiKey}     pageSize={12} country={"us"} category={"general"}/>} /> */}
          <Route exect path="health" element={<News setProgress={setProgress} apiKey={apiKey}      key="health" pageSize={12} country={"us"} category={"health"}/>} />
          <Route exect path="science" element={<News setProgress={setProgress} apiKey={apiKey}      key="science" pageSize={12} country={"us"} category={"science"}/>} />
          <Route exect path="sports" element={<News setProgress={setProgress} apiKey={apiKey}      key="sports" pageSize={12} country={"us"} category={"sports"}/>} />
          <Route exect path="technology" element={<News setProgress={setProgress} apiKey={apiKey}      key="technology" pageSize={12} country={"us"} category={"technology"}/>} />

        </Routes>
      </div>

    )
  
}

export default App;