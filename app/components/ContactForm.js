import React, {Component, PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';
export const fields = [ 'username', 'email', 'age' ]

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}

const renderField = field => (
  <div>
    <label>{field.input.placeholder}</label>
    <div>
      <input {...field.input}/>
      {field.touched && field.error && <span>{field.error}</span>}
    </div>
  </div>
)

class ContactForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    console.log(this.props);
    return (
      <form onSubmit={handleSubmit}>
        <Field name="username" type="text" component={renderField} placeholder="Username"/>
        <Field name="email" type="email" component={renderField} placeholder="Email"/>
        <Field name="age" type="number" component={renderField} placeholder="Age"/>
        <div>
          <button type="submit" disabled={submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'contact',
  validate
})(ContactForm)