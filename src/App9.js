import React, { useReducer } from "react"

const intialState = 0

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "reset":
            return 0
        default:
            return state
    }

}

function App9() {
    const [count, dispatch] = useReducer(reducer, intialState)
    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}
export default App9