import React from 'react';

const Field = (props) => (
  <div className="field">
    <div className="control">
      <input
        className={props.hasError
        ? "input is-medium is-danger"
        : "input is-medium"}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.updateValue}/>
        <p className="content">{props.hasError}</p>
    </div>
  </div>
);

export default Field;
