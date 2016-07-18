'use strict';

import React from 'react';
import $ from 'jquery';
import ApiConfig from '../constants/apiconfig';
import auth from '../common/auth'

class FightList extends React.Component{
constructor(props){
  super(props);
  this.state={
      error: ""
  };
}


render(){
  return(
 <div>
 <b>fight</b>
 </div>
  );
}
}
export {FightList as default};
