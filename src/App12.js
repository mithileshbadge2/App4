import React,{useRef, useState} from "react";

function App12(){
    const countref = useRef(0);
    const [rendCount , setRenderCount] = useState(0);

    const increment = () =>{
        countref.current++;
        console.log("Current countref value:",countref.current)
    }
    return (
        <div>
            <p>RenderCount:{rendCount}</p>
            <button onClick={()=>{
                increment();
                setRenderCount(rendCount+1)
            }}>Increment</button>
        </div>
    )
}
export default App12;