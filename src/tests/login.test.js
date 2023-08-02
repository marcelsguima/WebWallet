import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import store from '../redux/store';

import Login from '../pages/Login';

describe('Testando Login.js, verificar se:', () => {
  test('Se a rota inicial é a página de login', () => {
    render(<Provider store={ store }><MemoryRouter><Login /></MemoryRouter></Provider>);

    const login = screen.getByTestId('page-login');
    expect(login).toBeInTheDocument();
  });

  test('Se a página contém os campos de email e senha', () => {
    render(<Provider store={ store }><MemoryRouter><Login /></MemoryRouter></Provider>);

    const email = screen.getByText(/email:/i);
    expect(email).toBeInTheDocument();

    const senha = screen.getByText(/senha:/i);
    expect(senha).toBeInTheDocument();
  });

  test('Se a função dos campos de login e senha habilitam o botão entrar.', () => {
    render(<Provider store={ store }><MemoryRouter><Login /></MemoryRouter></Provider>);

    const email = screen.getByTestId('email-input');
    const senha = screen.getByTestId('password-input');

    userEvent.type(email, 'teste@teste.com');
    userEvent.type(senha, '123456');

    const enterBtn = screen.getByRole('button', { name: /entrar/i });
    expect(enterBtn).not.toBeDisabled();
  });
});
