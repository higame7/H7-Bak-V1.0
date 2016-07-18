'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import auth from './auth'
import { Router, Route, Link} from 'react-router'


class SideBar extends React.Component{
constructor(props){
  super(props);
  this.state={

  };
  
}
logout(){
  auth.logout();
  setTimeout(() =>{
    window.location.href="/#/login";
},500)
}
linkActive(key){
  $(".item").removeClass("active");
    $(".item").eq(key+1).addClass("active");
}
renderLinkList(){
  return(
    <div>
    <Link className="item active" to="/user" onClick={()=>this.linkActive(1)}>
    <b>用户管理</b>  <i className="user icon"></i>
    </Link>
    <Link className="item" to="/team" onClick={()=>this.linkActive(2)}>
    <b>战队管理</b>  <i className="users icon"></i>
    </Link>
    <Link className="item" to="/fight" onClick={()=>this.linkActive(3)}>
    <b>约战管理</b>  <i className="trophy icon"></i>
    </Link>
    </div>
  )
}
render(){
  let linkList = this.renderLinkList();
  return(
<div className = "ui vertical inverted sidebar small menu left  visible">
 <div className="item">
  <a className="ui logo icon image sidebar-img" href="/">
      <img  src="http://sso.haigame7.com/images/logo.png" />
    </a>
  <h5 className="ui right">氦7互娱后台管理系统</h5>
  </div>
 {linkList}
  <a className="item" onClick={()=>this.logout()}>
  <i className="power icon orange button"></i>
    <b>退出</b>
  </a>
</div>
  );
}
}
export {SideBar as default};
