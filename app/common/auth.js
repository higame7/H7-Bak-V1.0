'use strict';
import $ from 'jquery';
import ApiConfig from '../constants/apiconfig';
export default {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb({loggedIn:true,error:""})
      this.onChange(true)
      return
    }
    pretendRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        localStorage.data = JSON.stringify(res.data)
        if (cb) cb({loggedIn:true,error:""})
        this.onChange(true)
      } else {
        if (cb) cb({loggedIn:false,error:res.error})
        this.onChange(false)
      }
    })
  },

  getToken() {
    return localStorage.token
  },

  logout(cb) {
    delete localStorage.token
    delete localStorage.data
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {}
}

function pretendRequest(email, pass, cb) {
  setTimeout(() => {
    $.ajax({
      url:ApiConfig.USER_API.LOGINUSER,
      dataType:'json',
      method:'post',
      data:{'USERNAME':email,'PASSWORD':pass},
      cache:false,
      success:response=>{
        if(response[0].MessageCode==10001){
          cb({
            authenticated: false,
            error:"username",
            token:""
          })
        }else if(response[0].MessageCode==10002){
          cb({
            authenticated: false,
            error:"password",
            token: ""
          })

        }else if(response[0].MessageCode==0){
          cb({
            authenticated: true,
            error:"",
            token: Math.random().toString(36).substring(7),
            data:response[1]
          })
      }
    },
      error:(xhr,status,error)=>{
        cb({
          authenticated: false,
          error:error,
          token: ""
        })
      }
    })
  }, 0)
}
