import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletForm extends Component {
  state = {
    // expense: '',
    // expDescription: '',
    // currency: '',
  };

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <p>WalletForm</p>
        <form>
          <input
            type="text"
            placeholder="Nome da sua despesa"
            data-testid="value-input"
            name="expense"
            // value={  }
            // onChange={ handleChange }
          />
          <input
            type="text"
            placeholder="Descrição da sua despesa"
            data-testid="description-input"
            name="expDescription"
            // value={  }
            // onChange={ handleChange }
          />
          <select
            data-testid="currency-input"
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
            name="expDescription"
            // value={  }
            // onChange={ handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
          <select
            data-testid="tag-input"
            name="expDescription"
            // value={  }
            // onChange={ handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
          <button
            type="button"
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
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
