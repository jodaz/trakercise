import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';
import classnames from 'classnames';

import './index.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    
    const user = {
      username: this.state.username,
      password: this.state.password
    };

    axios.post('/api/users/login', user).then(res => {
      console.log(res.data);
    }).catch(err => this.setState({ errors: err.response.data }));
  }

  render() {
    const { errors } = this.state;

    return(
      <div className='login'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <h1 className='display-4 mb-5'>
                Log in
              </h1>
              <p className='lead'>
                Login into your Trakercise account
              </p>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Input
                    type='username'
                    name='username'
                    className={classnames({'is-invalid': errors.username})}
                    placeholder='Username'
                    onChange={this.handleChange}
                  />
                  {errors.username && (
                    <div className='invalid-feedback'>{errors.username}</div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Input
                    type='password'
                    name='password'
                    className={classnames({'is-invalid': errors.password})}
                    placeholder='Password'
                    onChange={this.handleChange}
                  />
                  {errors.password && (
                    <div className='invalid-feedback'>{errors.password}</div>
                  )}
                </FormGroup>
                <Button
                  type='submit'
                  color='primary'
                  outline
                >
                  Log in
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
