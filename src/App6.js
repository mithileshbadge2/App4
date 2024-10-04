// import React, { useState } from 'react';
// function App6() {

//     const [count, setCount] = useState(0)

//     let  updateCount = ()=>{
//         setCount((pre)=>pre + 1)
//     }

//     // let updateCount = () => {
//     //     setCount(count + 1)
//     // }

//     function updateFive() {
//         updateCount()
//         updateCount()
//         updateCount()
//         updateCount()
//         updateCount()
//     }

//     return <div>
//         <h1>Count:{count}</h1>
//         <button onClick={updateFive}>Update</button>

//     </div>

// }

// export default App6

// useState ----> declaration on top 
// previous ----> if you want update twice on component load


// create state ====> simple

// const [A,setA]= useState()
// // Based on lazy loading 
// const [count,setCount] = userState(()=>localStorage.getItem('count'))


import React, { useState, useEffect } from 'react';

function App6() {
    // Initialize the state with a value from localStorage, or use a default value if not available
    //   const [name , setName] = useState('')
    const [name, setName] = useState(() => {
        return localStorage.getItem('name') || ''; // Get from localStorage or default to empty string
    });

    // Use useEffect to update localStorage whenever the state changes
    useEffect(() => {
        localStorage.setItem('name', name);
    }, [name]); // The effect will run whenever 'name' changes

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <h1>Hello, {name || 'Friend'}</h1>
            <input
                type="text"
                value={name}
                onChange={handleInputChange}
                placeholder="Enter your name"
            />
        </div>
    );
}

export default App6;