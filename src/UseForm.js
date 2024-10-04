import { useState } from 'react';

function UseForm(intialValue) {

    const [values, setValues] = useState(intialValue)
    const handleChange = (event) => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value,

        });
    };

    return {
        values,
        handleChange

    };

}

export default UseForm;
