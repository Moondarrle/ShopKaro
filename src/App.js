import React, { useEffect, useState } from 'react';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const [progress, setProgress] = useState(0);


  const simulateLoading = () => {
    setProgress(30);

    setTimeout(() => {
      setProgress(70); 
    }, 1000);

    setTimeout(() => {
      setProgress(100);
    }, 2000);
  };


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <h1 className='m-3 text-center'>Shop karo bina apna bank balance dekha</h1>
        <Routes>
          <Route exact path="/" element={<MainPage category="" loadingBar={simulateLoading}/>} />
          <Route exact path="/electronics" element={<MainPage category="electronics" loadingBar={simulateLoading}/>} />
          <Route exact path="/jewelery" element={<MainPage category="jewelery" loadingBar={simulateLoading} />} />
          <Route exact path="/mensClothing" element={<MainPage category="men's clothing" loadingBar={simulateLoading}/>} />
          <Route exact path="/womensClothing" element={<MainPage category="women's clothing" loadingBar={simulateLoading}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
