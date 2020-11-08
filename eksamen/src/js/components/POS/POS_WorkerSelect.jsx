import React, { useState } from 'react';
import '../../../css/POS/POS_WorkerSelect.css';


let POS_WorkerSelect = () => {



  return (
    <div className="workerSelectContainer">
      <select className="workerSelect">
        <option value="0">Select emplyee:</option>
        <option value="1">Agnes</option>
        <option value="2">Bill</option>
        <option value="3">Elisabeth</option>
        <option value="4">Thomas</option>
      </select>
    </div>
  );
}


export default POS_WorkerSelect;