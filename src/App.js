import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Wallet from './pages/Wallet';
import Login from './pages/Login';

class App extends React.Component {
  state = { userName: '' };

  render() {
    const { userName } = this.state;
    return (
      <div>
        <p>TrybeWallet</p>
        <Switch>
          <Route
            exact
            path="/"
            component={ Login }
            userName={ userName }
          />
          <Route exact path="/carteira" component={ Wallet } />
        </Switch>
      </div>
    );
  }
}

export default App;
