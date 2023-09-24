import { useState } from "react"

const Dropdown = ({ label, name, options, ...props }) => {
  const [toggleOptions, setToggleOptions] = useState(false);
  const [value, setValue] = useState(options[0].label)
  return (
    <div className="Dropdown relative" {...props}>
      <div className={`wrapper h-[58px] ${toggleOptions && 'active'} ${value && 'selected'}`} onClick={() => setToggleOptions(toggleOptions => !toggleOptions)}>
          <label>{ label }</label>
          <p className="value-field">{value}</p>
      </div>
      { toggleOptions &&
        <div className="options" onChange={(e) => {setValue(e.target.dataset.label); setToggleOptions(toggleOptions => !toggleOptions)}}>
          { options.map((item, index) => (
            <div className={`option relative ${item.label === value && 'selected'}`} key={index} >
              <input defaultChecked={index === 1? true: false} className="opacity-0 absolute left-0 top-0 w-full h-full z-10 cursor-pointer" type="radio" value={item.value} data-label={item.label} name={name} />
              {item.label}
            </div>
          )) }
        </div>
      }
  </div>
  )
}

export default Dropdown