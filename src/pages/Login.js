import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions/index';

class Login extends React.Component {
  state = {
    isDisabled: true,
    password: '',
    email: '',
  };

  onInputChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value }, this.verifyBtn);
  };

  verifyBtn = () => {
    const { email, password } = this.state;
    const regex = /\S+@\S+\.\S+/;
    const verifyEmail = regex.test(email);
    const pswrMinLen = 6;
    const verifyPassword = password.length >= pswrMinLen;
    this.setState({ isDisabled: !(verifyEmail && verifyPassword) });
  };

  handleClick = () => {
    const { email } = this.state;
    const { history, dispatch } = this.props;
    dispatch(addUser(email));
    history.push('/carteira');
  };

  render() {
    const { email, isDisabled, password } = this.state;

    return (
      <div data-testid="page-login">
        <p>Login Page</p>

        <form>
          <label htmlFor="email">
            Email:
            <input
              id="mailInput"
              data-testid="email-input"
              type="email"
              name="email"
              value={ email }
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="passwordField">
            Senha:
            <input
              id="pswdInput"
              data-testid="password-input"
              type="password"
              name="password"
              value={ password }
              onChange={ this.onInputChange }
            />
          </label>
          <button
            type="button"
            name="Entrar"
            data-testid="login-submit-button"
            disabled={ isDisabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>

      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default connect()(Login);
