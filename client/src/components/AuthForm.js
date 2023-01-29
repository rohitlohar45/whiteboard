import React, { Component } from 'react'
import { Spacer, Button, Loading } from './utilities';

import { login, register, clearErrors } from '../actions/authActions';

import { connect } from 'react-redux';

export class AuthForm extends Component {

  // state = {
  //   AuthType: null,
  //   form: {
  //     username: null,
  //     password: null,
  //     email: null
  //   }
  // }

  // setAuthType(value) {
  //   this.props.clearErrors();

  //   this.setState({
  //     AuthType: value,
  //     form: {
  //       name: null,
  //       password: null,
  //       email: null
  //     }
  //   });
  // }

  // onChange = e => {
  //   this.setState({ form: { ...this.state.form, [e.target.name]: e.target.value } })
  // }

  // onSubmit = e => {
  //   e.preventDefault();
  //   this.props.clearErrors();

  //   const { name, password, email } = this.state.form;
  //   const credentials = { name, password, email };

  //   if (this.state.AuthType === 'SignIn') this.props.login(credentials)
  //   else if (this.state.AuthType === 'Register') this.props.register(credentials)
  // }

  render() {
    return (
      <div
        style={{ ...this.props.style }}
        className='flexbox cu uc full vertical p4'>
        <Spacer height='3rem'></Spacer>
        <div className='flexbox uc cu'>
          <Button classes='large primary' style={{ flex: 5 }} onClick={this.props.toggleCreateBoard}>Create New Board</Button>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  errors: state.auth.errors
});
export default connect(mapStateToProps, { login, register, clearErrors })(AuthForm);