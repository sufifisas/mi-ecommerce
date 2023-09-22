import { useState } from "react";

const TextField = ({ label, name, defaultValue }) => {

    const [value, setValue] = useState('')

    return (
        <div className="TextField">
            <label>{ label }</label>
            <input placeholder="test" name={name} defaultValue={defaultValue} onInput={(e) => setValue(e.target.value)}/>
        </div>
    )
}

export default TextField;