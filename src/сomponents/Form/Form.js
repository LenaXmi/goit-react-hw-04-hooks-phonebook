import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './Form.module.css';

class Form extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      id: nanoid(5),
      [name]: value,
    });
  };

  handleSubmit = e => {
    const { submit } = this.props;
    e.preventDefault();

    submit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ id: '', name: '', number: '' });
  };
  render() {
    return (
      <form className={s.Form} onSubmit={this.handleSubmit}>
        <label className={s.Label}>
          Name
          <input
            className={s.Input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.Label}>
          Number
          <input
            className={s.Input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button className={s.FormBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  submit: PropTypes.func.isRequired,
};
