import React, { useReducer } from "react";

const intialState = {
    username: "",
    email: "",
    password: ""
};

function reducer(state, action) {
    switch (action.type) {
        case "setUserName":
            return { ...state, username: action.payload };
        case "setEmail":
            return { ...state, email: action.payload };
        case "setPassword":
            return { ...state, password: action.payload }
        case "reset":
            return intialState
        default:
            throw new Error('unknow error... type')
    }

}
function App10() {
    const [state, dispatch] = useReducer(reducer, intialState);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted:", state)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    username:
                    <input
                        type='text'
                        name='username'
                        value={state.username}
                        onChange={(e) => dispatch({ type: "setUserName", payload: e.target.value })}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type='text'
                        name='email'
                        value={state.email}
                        onChange={(e) => dispatch({ type: "setEmail", payload: e.target.value })}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type='text'
                        name='password'
                        value={state.password}
                        onChange={(e) => dispatch({ type: "setPassword", payload: e.target.value })}
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>

    )

}
export default App10;