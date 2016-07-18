'use strict';

import React from 'react';
import {render} from 'react-dom';
import UserList from './user/UserList';
import TeamList from './team/TeamList';
import FightList from './fight/FightList';
import Header from './common/Header';
import SideBar from './common/SideBar';
import { hashHistory, Router, Route, Link, withRouter,Redirect } from 'react-router'
import $ from 'jquery';
import auth from './common/auth'


const App = React.createClass({
  getInitialState() {
    return {
      loggedIn: auth.loggedIn()
    }
  },
  updateAuth(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    })
  },

  componentWillMount() {
    auth.onChange = this.updateAuth
    auth.login()
  },

  render() {
    return (
      <div>
      <Header/>
      <SideBar/>
        {this.props.children}
      </div>
    )
  }
})

const Login = withRouter(
  React.createClass({
    getInitialState() {
      return {
        error: ""
      }
    },
    handleSubmit(event) {
      event.preventDefault()
      const email = this.refs.username.value
      const pass = this.refs.password.value
      auth.login(email, pass, (loggedIn) => {
        if (!loggedIn.loggedIn){
            if(loggedIn.error=="username"){
              $(".ui.large.form").addClass("error");
              $(".field").removeClass("error");
              $(".field").first().addClass("error");
              $(".ui.error.message").html('<p>用户名错误</p>');
            }else if(loggedIn.error=="password"){
              $(".ui.large.form").addClass("error");
                $(".field").removeClass("error");
                $(".field").next().addClass("error");
                $(".ui.error.message").html('<p>密码错误</p>');
            }
        }else{
          $(".ui.large.form").removeClass("error");
          $(".field").removeClass("error");
          $(".ui.large.form").addClass("success");
          setTimeout(()=>{
            const { location } = this.props
            if (location.state && location.state.nextPathname) {
              this.props.router.replace(location.state.nextPathname)
            } else {
              this.props.router.replace('/')
            }
          },500)
        }
      })
    },
    render(){
      return(
    <div>
    <Header/>
      <div className="column">
        <h2 className="ui teal image header">
          <img src="http://sso.haigame7.com/images/logo.png" className="image"/>
          <div className="content">
            氦7互娱后台管理系统
          </div>
        </h2>
        <form onSubmit={this.handleSubmit} className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input ref="username" type="text"  placeholder="用户名"/>
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input ref="password" type="password" name="password"  placeholder="密码"/>
              </div>
            </div>
            <button type="submit" className="ui fluid large teal submit button" >登录</button>
          </div>

          <div className="ui error message"><ul class="list"><li>Please enter your e-mail</li><li>Please enter your password</li></ul></div>
          <div className="ui success message"><div className="content"><p>登陆成功</p></div>
       </div>
        </form>
      </div>
    </div>
      );
    }
  })
)



function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

render((
  <Router history={hashHistory} >
    <Route path="/" component={App} onEnter={requireAuth}>
     <Route path="/user" component={UserList}  onEnter={requireAuth}/>
      <Route path="/team"  component={TeamList}  onEnter={requireAuth}/>
     <Route path="/fight"  component={FightList}  onEnter={requireAuth}/>
     <Redirect  to="/user"/>
    </Route>

      <Route path="login" component={Login} />
  </Router>
), document.getElementById('app'))
