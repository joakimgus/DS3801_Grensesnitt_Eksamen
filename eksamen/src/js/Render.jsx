import React, { useState } from 'react';
import Pos from './Pos.jsx';
import App from './App.jsx';



const Render = () => {
    window.addEventListener('resize', handleResize);
    const [windowSize, setWindowSize] = useState(812)
    function handleResize(){
      setWindowSize(window.innerWidth);
    }

  return (
    <>
        <div data-windowSize={windowSize}>
            {window.innerWidth <= 813 ?  <App /> : <Pos />}
        </div>
    </>
  )
}

export default Render;