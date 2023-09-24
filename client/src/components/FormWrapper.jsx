import { useState } from 'react';

const FormWrapper = ({ children }) => {
    const [value, setValue] = useState(null);
    const [validate, setValidate] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const invalidList = Object.values(validate ?? {});

        if(invalidList.every((item) => item === 'false')) {
            alert('form validated')
        }
    }

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        })
    }

    const handleValidate = (e) => {
        if (e.target.type !== 'submit' && e.target.type !== 'button') {
            setValidate({
                ...validate,
                [e.target.name]: e.target.ariaInvalid,
            })
        }
    }
    return (
        <form onSubmit={handleSubmit} onBlur={handleValidate} onChange={handleChange}>{ children }</form>
    )
}

export default FormWrapper;