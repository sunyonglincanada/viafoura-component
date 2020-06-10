import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Comments from './components/comment/Comments';
import Alert from './components/layout/Alert';
import Routes from './components/routing/routes';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <section className='container'>
          <Alert />
          <Switch>
            <Route exact path='/' component={Comments} />
            <Route component={Routes} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
