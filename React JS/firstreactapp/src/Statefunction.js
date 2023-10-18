import React, { useState } from "react"

function StateChange()
{
    const[nm,setNm] = useState("Welcome");
    const ChangeNm =()=>{
        if(nm=="Welcome")
          setNm("React Js")
          else
        setNm("Welcome");
      }
    return (
        <div>
            <h1>{nm}</h1>
        
            <button onClick={ChangeNm} >
                Change Name
            </button>
        </div>
    )
}
function StateC()
{   
    let pink='pink';
    let blue='blue'
    const[clor,setclor] = useState(pink);

    return (
        <div>
            <h1 style={{background: clor}}>Welcome</h1>
            
            <button onClick={()=>{if(clor==pink) setclor(blue); else setclor(pink) }}>
                Change color
            </button>
        </div>
    )
}

function Statepra()
{
    let yellow = 'yellow';
  const [bgColor, setBgColor] = useState(yellow);
   const changeColor =()=>{
      let color= 'green';
      setBgColor(color);
    }
    const changeColor1 =()=>{
        let color= 'aqua';
        setBgColor(color);
      }
  return (
    <div>
            <p  onMouseOver={changeColor} onMouseOut={changeColor1} style={{background: bgColor}}>React Js is Nothing but JavaScript Library</p>
            

    </div>
  );
    
}

function CountChange()
{
    const[count,setCm] = useState(0);

    return (
        <div>
            <h1>Count:{count}</h1>
            <button onMouseDown={()=>{setCm(count-1)}}>
                decrement
            </button>
            <button onMouseUp={()=>{setCm(count+1)}}>
                increment
            </button>
            
        </div>
    )
}
export {StateChange,Statepra,StateC ,CountChange}
