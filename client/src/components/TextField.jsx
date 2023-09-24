import { useState } from "react";
import * as yup from 'yup';

const TextField = ({ label, name, defaultValue, validation, ...props }) => {
    const [error, setError] = useState('');

    const handleValidation = async (e) => {
        let userSchema = validation ? eval(validation) : yup.string().nullable();

        try {
            await userSchema.validate(e.target.value);
            setError('');
            return true;
        } catch (err) {
            setError(err.errors[0]);
        }
    }

    const [value, setValue] = useState('')

    return (
        <div className="TextField">
            <div className={`wrapper ${error && 'invalid'}`}>
                <label>{ label }</label>
                <input
                    {...props}
                    onChange={handleValidation}
                    onBlur={handleValidation}
                    placeholder="test"
                    name={name}
                    defaultValue={defaultValue}
                    onInput={(e) => setValue(e.target.value)}
                    aria-invalid={!!error}
                />
            </div>
            { error && <span className="error-msg">{error}</span> }
        </div>
    )
}

export default TextField;