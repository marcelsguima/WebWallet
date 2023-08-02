import React from 'react';
import { screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';

import App from '../App';
import Wallet from '../pages/Wallet';

describe('Testando Wallet.js, verificar se:', () => {
  test('Se é renderizada a página da carteira', () => {
    renderWithRouterAndRedux(<Wallet />);
    const { history: { location: { pathname } } } = renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    expect(pathname).toBe('/carteira');
  });

  test('Se header está renderizado corretamente', () => {
    renderWithRouterAndRedux(<Wallet />);
    // const usrEmail = 'test@test.com';

    const headerEmail = screen.getByTestId('email-field');
    expect(headerEmail).toBeInTheDocument();

    const headerCurrField = screen.getByTestId('header-currency-field');
    expect(headerCurrField).toBeInTheDocument();

    const totalField = screen.getByTestId('total-field');
    expect(totalField).toBeInTheDocument();
  });

  test('Se walletForm está renderizado corretamente', () => {
    renderWithRouterAndRedux(<Wallet />);
    // const usrEmail = 'test@test.com';

    const value = screen.getByTestId('value-input');
    expect(value).toBeInTheDocument();

    const description = screen.getByTestId('description-input');
    expect(description).toBeInTheDocument();

    const currency = screen.getByTestId('currency-input');
    expect(currency).toBeInTheDocument();

    const method = screen.getByTestId('method-input');
    expect(method).toBeInTheDocument();

    const tag = screen.getByTestId('tag-input');
    expect(tag).toBeInTheDocument();
  });

  test('Se table adiciona uma expense corretamente', async () => {
    renderWithRouterAndRedux(<Wallet />);

    const addBtn = screen.getByTestId('add-btn');
    userEvent.click(addBtn);

    // const expense = screen.getByRole('row');
    // expect(expense).toBeInTheDocument();
    const deleteBtn = await screen.findByTestId('delete-btn');
    expect(deleteBtn).toBeInTheDocument();
  });
});
