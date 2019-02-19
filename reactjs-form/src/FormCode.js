// FormCode.js

import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label className="control-label">{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className="form-control" />
        {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

let FormCode = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div className="form-group">
        <Field name="firstName" component={renderField} label="First Name" />
      </div>
      <div className="form-group">
        <Field name="lastName" component={renderField} label="Last Name" />
      </div>
      <div className="form-group">
        <Field name="email" component={renderField} label="Email" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  )
}
FormCode = reduxForm({
  form: 'contact'
})(FormCode);

export default FormCode;