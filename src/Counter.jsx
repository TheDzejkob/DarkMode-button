import { useState } from 'react';
import './App.css';



function Counter() {
  //js/ts kod

    const [counter,setCounter] = useState(0)

  return ( //any
    <div className="Counter">

        <button onClick={()=>setCounter(counter+1)} >Increase Count</button><br/>
        {counter}

    </div>
  );
}

export default Counter;
