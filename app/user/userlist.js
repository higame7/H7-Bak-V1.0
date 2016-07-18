'use strict';

import React from 'react';
import $ from 'jquery';
import ApiConfig from '../constants/apiconfig';
import auth from '../common/auth'

class UserList extends React.Component{
constructor(props){
  super(props);
  this.state={
      error: ""
  };
}


render(){
  return(
 <div>
 <b>user</b>
 </div>
  );
}
}
export {UserList as default};
