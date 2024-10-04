import { useState, useEffect } from "react"

// const App3 = ()=> {

//     fetch('https://reqres.in/api/users?page=2')
//     .then((response)=>{
//         return response.json()
//     })
//     .then((response)=>{
//         console.log(response.data)
//     })

//     return <h1>Check console</h1>;
// };

// export default App3


// const App3 = () => {
//     useEffect(() => {
//         fetch('https://reqres.in/api/users/2')
//             .then((response) => {
//                 return response.json()
//             })
//             .then((response) => {
//                 console.log(response.data)
//             })

//     },[]);
//     return <div>Check the console .....</div>
// }
// export default App3


const App3 = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                let response = await fetch('https://reqres.in/api/users/2');
                let result = await response.json();
                setUser(result.data)
            } catch (error) {
                console.error('Error fetching:', error);
            }
        };
        fetchUser();
    }, []);

    return (
        <div>
            <h1>{user?.first_name}</h1>
        </div>
    );
};
export default App3;