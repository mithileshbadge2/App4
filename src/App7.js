import React from 'react';
import useForm from './UseForm';

function App7() {
    const { values, handleChange } = useForm({
        username: "",
        email: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted", "values")
    }

    return (

        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    username:
                    <input
                        type='text'
                        name='username'
                        value={values.username}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    email:
                    <input
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button type='submit'>Submit</button>

        </form>
    )

}

export default App7