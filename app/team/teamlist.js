'use strict';

import React from 'react';
import $ from 'jquery';
import ApiConfig from '../constants/apiconfig';
import auth from '../common/auth'

class TeamList extends React.Component{
constructor(props){
  super(props);
  this.state={
      error: ""
  };
}


render(){
  return(
 <div>
 <b>team</b>
 </div>
  );
}
}
export {TeamList as default};
