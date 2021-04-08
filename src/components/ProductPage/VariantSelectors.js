import React from 'react'

const VariantSelector = ({ onChange, options }) => {
  return (
    <div className="field ">
      <label className="label">{options.name} </label>
      <div className="control">
        <div className="select is-fullwidth">
          <select onBlur={onChange} name={options.name} key={options.id}>
            {options.values.map(value => (
              <option
                key={`${options.name}-${value}`}
                value={value}
                className="is-medium"
              >
                {`${value}`}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default VariantSelector
