import React from 'react';

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label className="control-label">{label}</label>
      <div>
        <input className="form-control" {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

  export {renderField};