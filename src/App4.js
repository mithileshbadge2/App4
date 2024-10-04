
// Template -----
// API --  loading , error , response

import { useState, useEffect } from "react";

const App4 = () => {

    const [data, setData] = useState([])
    const [load, setIsLoading] = useState(true) // flag
    const [error, setError] = useState(null)
    const [ids, setIds] = useState([1, 2, 3])
    const updateIds = () => {
        setIds([4, 5, 6])
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true) // start loading
            setError(null)   // clear previous errors
            try {
                const fetchPromise = ids.map(async (id) => {
                    let response = await fetch(`https://reqres.in/api/users/${id}`)
                    if (!response.ok) {
                        throw new Error(`Failed to fetch the data ...${id}`)
                    }
                    return response.json()

                });

                const results = await Promise.all(fetchPromise) //[data1 , data2 , data3]
                setData(results.map((result) => result.data));

            }
            catch (err) {
                setError(err.message);
            }

        }

        fetchData();
    }, [ids])

    if (load) return <div>Loading.....</div>;
    if (error) return <div>Error:{error}</div>
    return (
        <div>
            <h1>Fetched data .....</h1>
            <ul>
                {
                    data && data.map((user) => (
                        <li>
                            {user.first_name}{user.last_name} - {user.email}
                        </li>
                    ))

                }
            </ul>
            <button onClick={updateIds}>Update IDs</button>
        </div>
    )

};

export default App4


