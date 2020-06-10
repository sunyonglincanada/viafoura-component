import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Alert from '../layout/Alert';
import Replies from '../reply/Replies';
import ReplyForm from '../reply/ReplyForm';

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/replies' component={Replies} />
        <Route exact path='/reply-form/:id' component={ReplyForm} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
