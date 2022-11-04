import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updatedTable } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
  };

  handleClick = () => {
    this.getCurrency();
    this.sumExpenses();
    this.setState((e) => ({
      id: e.id + 1,
    }));
    this.resetForm();
  };

  sumExpenses = () => {
    const { expenses } = this.props;
    expenses.reduce((acc, e) => {
      const parc = (Number(e.value) * Number(e.exchangeRates[e.currency].ask)).toFixed(2);
      const final = Number(parc) + Number(acc);
      return final;
    }, 0);
  };

  resetForm = () => {
    this.setState({
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    });
  };

  getCurrency = () => {
    const { dispatch } = this.props;
    dispatch(updatedTable(this.state));
  };

  onInputChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <p>WalletForm</p>
        <form>
          <input
            type="text"
            placeholder="Valor da sua despesa"
            data-testid="value-input"
            name="value"
            value={ value }
            onChange={ this.onInputChange }

          />
          <input
            type="text"
            placeholder="Descrição da sua despesa"
            data-testid="description-input"
            name="description"
            value={ description }
            onChange={ this.onInputChange }
          />
          <select
            data-testid="currency-input"
            name="currency"
            value={ currency }
            onChange={ this.onInputChange }
          >
            {currencies.map((key, i) => (
              <option
                key={ i }
              >
                {key}
              </option>
            ))}
          </select>
          <select
            data-testid="method-input"
            name="method"
            value={ method }
            onChange={ this.onInputChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
          <select
            data-testid="tag-input"
            name="tag"
            value={ tag }
            onChange={ this.onInputChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func,
  expenses: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

WalletForm.defaultProps = {
  dispatch: [],
};

export default connect(mapStateToProps)(WalletForm);
