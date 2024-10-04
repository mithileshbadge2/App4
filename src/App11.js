import React,{useRef} from "react";

function App11(){
    const inputref = useRef(null);

    const focusInput = ()=>{
        inputref.current.focus();
    };
    return (
        <div>
            <input ref = {inputref} type="text"/>
            <button onClick={focusInput}>Click</button>
        </div>
    )
}

export default App11