import { useState } from 'react';

const FormWrapper = ({ onSubmit, onChange, children }) => {
    const [value, setValue] = useState(null);
    // const [validate, setValidate] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const invalidList = [...e.target.querySelectorAll('input')].map((item) => {
            return item.ariaInvalid
        })
        console.log(value, invalidList, 'valid')
        if(invalidList.every((item) => item === 'false')) {
            onSubmit && onSubmit(value);
            console.log('form submiited')
        }
    }

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        })
        onChange && onChange();
    }

    // const handleValidate = (e) => {
    //     console.log(e.target.ariaInvalid, e.target.name)
    //     if (e.target.type !== 'submit' && e.target.type !== 'button') {
    //         console.log(e.target.ariaInvalid, e.target.name)
    //         setValidate({
    //             ...validate,
    //             [e.target.name]: e.target.ariaInvalid,
    //         })
    //     }
    // }
    return (
        <form onSubmit={handleSubmit} onChange={handleChange}>{ children }</form>
    )
}

export default FormWrapper;