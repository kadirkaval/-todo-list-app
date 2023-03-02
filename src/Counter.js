// class component => state (Component), lifecycle
// function component + state (hooks) 

import { useState } from "react";

function Counter() {
  const [count, setCount]=useState(0);
  const [text, setText] = useState('')
  return (
    <div>
      <p>Butona {count} kez tıkladınız</p>
      <p> Selam {text} </p>
      <button onClick={()=>setCount(count+1)}>+1</button>
      <input value={text} onChange={(e)=>setText(e.target.value)}/>
      
    </div>
  );
}

export default Counter;