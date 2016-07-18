'use strict';


var apiSetup = {
  'MASTER_API_PATH': 'http://bakapi.haigame7.com/', //主站
  'ACCESS_TOKEN': 'ABC12abc',
}
var userApi = {
  'GETVERIFYCODE1': apiSetup.MASTER_API_PATH + 'v1/User/VerifyCode1?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'GETVERIFYCODE2': apiSetup.MASTER_API_PATH + 'v1/User/VerifyCode2?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'REGISTERUSER': apiSetup.MASTER_API_PATH + 'v1/User/Register?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'RESETPASSWORD': apiSetup.MASTER_API_PATH + 'v1/User/ResetPassWord?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'LOGINUSER': apiSetup.MASTER_API_PATH + 'v1/User/Login?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'UPDATE_USER_INFO': apiSetup.MASTER_API_PATH + 'v1/User/UpdateUserInfo?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'GET_USER_INFO': apiSetup.MASTER_API_PATH + 'v1/User/UserInfo?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'GET_USER_INFO_BY_ID': apiSetup.MASTER_API_PATH + 'v1/User/UserInfoByUserID?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'GET_USER_GAME_INFO': apiSetup.MASTER_API_PATH + 'v1/User/MyGameInfo?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'GET_USER_MESSAGE': apiSetup.MASTER_API_PATH + 'v1/User/MyMessage?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'DEL_MESSAGE': apiSetup.MASTER_API_PATH + 'v1/User/DeleteMessage?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'SET_MESSAGE_READ': apiSetup.MASTER_API_PATH + 'v1/User/SetMessageRead?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'CERTIFY_GAME_ID': apiSetup.MASTER_API_PATH + 'v1/User/CertifyGameID?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'UPDATE_CERTIFY_GAME_ID': apiSetup.MASTER_API_PATH + 'v1/User/UpdateCertifyGameID?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'NOTEAMUSERLIST':apiSetup.MASTER_API_PATH +'/v1/User/NoTeamUserList?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'SIGN_IN':apiSetup.MASTER_API_PATH +'/v1/User/SignIn?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'IS_SIGN_IN':apiSetup.MASTER_API_PATH +'/v1/User/IsSignIn?accesstoken='+ apiSetup.ACCESS_TOKEN,
}


const fightApi = {
  'GETUSERDEFAULTTEAM':apiSetup.MASTER_API_PATH +'/v1/Team/MyTeam?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'GETFIGHTTEAMLIST':apiSetup.MASTER_API_PATH +'/v1/Team/TeamList?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'GETALLFIGHTINFO':apiSetup.MASTER_API_PATH + 'v1/Fight/AllFightList?accesstoken='+apiSetup.ACCESS_TOKEN,
  'MAKECHANLLENGE':apiSetup.MASTER_API_PATH + 'v1/Fight/MakeChallenge?accesstoken='+apiSetup.ACCESS_TOKEN,
  'GETUSERFIGHT':apiSetup.MASTER_API_PATH + 'v1/Fight/MyFight?accesstoken='+apiSetup.ACCESS_TOKEN,
  'REJECT':apiSetup.MASTER_API_PATH + 'v1/Fight/Reject?accesstoken='+apiSetup.ACCESS_TOKEN,
  'ACCEPT':apiSetup.MASTER_API_PATH + 'v1/Fight/Accept?accesstoken='+apiSetup.ACCESS_TOKEN,
  'UPDATEGAMEID':apiSetup.MASTER_API_PATH + 'v1/Fight/UpdateGameID?accesstoken='+apiSetup.ACCESS_TOKEN,

}
const teamApi={
  'GETUSERDEFAULTTEAM':apiSetup.MASTER_API_PATH +'/v1/Team/MyTeam?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'GETTEAMLIST':apiSetup.MASTER_API_PATH +'/v1/Team/TeamList?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'GETALLMYTEAM':apiSetup.MASTER_API_PATH +'/v1/Team/MyAllTeam?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'CREATETEAM':apiSetup.MASTER_API_PATH +'/v1/Team/Create?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'DELETETEAM':apiSetup.MASTER_API_PATH +'/v1/Team/Delete?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'UPDATETEAM':apiSetup.MASTER_API_PATH +'/v1/Team/Update?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'MYAPPLYTEAMLIST':apiSetup.MASTER_API_PATH +'/v1/Team/MyApplyTeamList?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'MYINVITEDTEAMLIST':apiSetup.MASTER_API_PATH +'/v1/Team/MyInvitedTeamList?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'APPLYTEAM':apiSetup.MASTER_API_PATH +'/v1/Team/ApplyTeam?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'GETRECRUITLIST':apiSetup.MASTER_API_PATH +'/v1/Team/RecruitList?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'GETTEAMBYID':apiSetup.MASTER_API_PATH +'/v1/Team/GetTeambyID?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'SENDRECRUIT':apiSetup.MASTER_API_PATH +'/v1/Team/SendRecruit?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'INVITEUSER':apiSetup.MASTER_API_PATH +'/v1/Team/InviteUser?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'INVITEDUSERLIST':apiSetup.MASTER_API_PATH +'/v1/Team/InvitedUserList?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'APPLYUSERLIST':apiSetup.MASTER_API_PATH +'/v1/Team/ApplyUserList?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'HANDLEMYINVITED':apiSetup.MASTER_API_PATH +'/v1/Team/HandleMyInvited?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'HANDLEMYAPPLY':apiSetup.MASTER_API_PATH +'/v1/Team/HandleMyApply?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'SETDEFAULTTEAM':apiSetup.MASTER_API_PATH +'/v1/Team/SetDefaultTeam?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'REMOVEUSER':apiSetup.MASTER_API_PATH +'/v1/Team/RemoveUser?accesstoken='+ apiSetup.ACCESS_TOKEN,
}
const otherApi={
  'CURRENTVERSION':apiSetup.MASTER_API_PATH +'/v1/Version/CurrentVersion?accesstoken='+ apiSetup.ACCESS_TOKEN,
}
module.exports = {
  USER_API: userApi,
  FIGHT_API:fightApi,
  TEAM_API:teamApi,
  OTHER_API:otherApi,
}
