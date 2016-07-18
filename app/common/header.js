'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';



class Header extends React.Component{
constructor(props){
  super(props);
  this.state={

  };
}
render(){
  return(
<div className="header ui fixed tertiary segment  menu " >
<div className="ui right item">
<b className="ui right ">氦7互娱后台管理系统</b>
<div className="ui right ">
<img src="http://sso.haigame7.com/images/logo.png"  className="header-img"/>
</div>
</div>
</div>

  );
}
}
export {Header as default};
