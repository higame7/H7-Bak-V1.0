'use strict';

import React from 'react';
import {render} from 'react-dom';
import LoginBox from './user/LoginBox';
import { hashHistory, Redirect,Router, Route, Link, withRouter } from 'react-router'
import auth from './common/auth'


  render((
        <Router history={hashHistory}>
          <Route path="/login" component={LoginBox} />
          <Redirect from="/" to="/login"/>
        </Router>
),document.getElementById('app'))
