import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteExp } from '../redux/actions';

class Table extends Component {
  deleteExpense = (id) => {
    const { dispatch } = this.props;
    dispatch(deleteExp(id));
  };

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((e) => {
              const curr = e.currency;
              const exgTable = Object.values(e.exchangeRates);
              const code = exgTable.filter((currency) => currency.code === curr);
              const exg = code[0].ask;
              const currId = code[0].name;
              const finalValue = e.value * exg;
              return (
                <tr key={ e.id }>
                  <td>{e.description}</td>
                  <td>{e.tag}</td>
                  <td>{e.method}</td>
                  <td>{Number(e.value).toFixed(2)}</td>
                  <td>{currId}</td>
                  <td>{Number(exg).toFixed(2)}</td>
                  <td>{Number(finalValue).toFixed(2)}</td>
                  <td>Real</td>

                  <td>

                    <button
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => { this.deleteExpense(e.id); } }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
