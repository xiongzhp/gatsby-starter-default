import React, { Component } from 'react';

import styles from './index.module.css';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const initialState = {
  Name: '',
  Phone: '',
  Email: '',
  Subject: '',
  Message: '',
};

class NetlifyForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'Contact', ...this.state }),
    })
      .then(() => {
        this.setState({
          ...initialState,
          message: 'Thank you for your message!',
        });
      })
      .catch((error) => {
        this.setState({ message: error });
      });
  }

  render() {
    const { message } = this.state;
    return (
      <div className={styles.NetlifyForm}>
        <h3>Email</h3>
        <form
          className={styles.form}
          method="POST"
          name="Contact"
          data-netlify="true"
          data-netlify-honeypot="Phone"
          onSubmit={this.handleSubmit}
        >
          <div className={styles.inputWrapper}>
            <input
              autoComplete="name"
              className={styles.input}
              name="Name"
              onChange={this.handleChange}
              placeholder="Name"
              type="text"
              value={this.state.Name}
            />
            <input
              autoComplete="tel-national"
              className={styles.phone}
              name="Phone"
              onChange={this.handleChange}
              placeholder="Phone"
              type="tel"
              value={this.state.Phone}
            />
            <input
              autoComplete="email"
              className={styles.input}
              name="Email"
              onChange={this.handleChange}
              placeholder="Email"
              type="email"
              value={this.state.Email}
            />
            <input
              className={styles.input}
              type="text"
              name="Subject"
              onChange={this.handleChange}
              placeholder="Subject"
              value={this.state.Subject}
            />
            <textarea
              className={styles.textarea}
              name="Message"
              onChange={this.handleChange}
              placeholder="Message"
              rows="5"
              value={this.state.Message}
            />
          </div>
          <button className={styles.submit} type="submit">
            <span className={styles.textGradient}>Submit</span>
          </button>
        </form>
        <div>{message}</div>
      </div>
    );
  }
}

export default NetlifyForm;
