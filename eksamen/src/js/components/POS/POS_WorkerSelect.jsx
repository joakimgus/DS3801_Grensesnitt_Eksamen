import React, { useState } from 'react';
import '../../../css/POS/POS_WorkerSelect.css';


let POS_WorkerSelect = () => {



  return (
      <div className="workerSelectContainer">
        <select className="workerSelect">
          <option value="0">Select employee </option>
          <option value="1">Batman</option>
          <option value="2">Superman</option>
          <option value="3">Wonderwoman</option>
          <option value="4">Wolverine</option>
        </select>
      </div>
  );
}


export default POS_WorkerSelect;