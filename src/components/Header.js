import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          Email:
          {email}
        </p>
        <p data-testid="header-currency-field">
          Câmbio:BRL
        </p>
        <p data-testid="total-field">
          { expenses.reduce((acc, e) => (
            acc + (Number(e.value) * Number(e.exchangeRates[e.currency].ask))
          ), 0).toFixed(2) }
        </p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
