import store from '../store'
const ssoconfig = {

   FULL_CHARTER : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopgrstuvwxyz',
  //应用id
   clientId : 'sharecesuo',
   redirectUri:'http://192.168.1.100:8099/login',
   responseType:'code',
  //授权中心地址
   authServer : 'http://192.168.1.100:8000/',
   authorize :'oauth/authorize', //获取授权码
   logoutUrl :'logout',

  //获取授权码
  getAuthorizeCode() {
    let state = this.getState();
    window.sessionStorage.setItem('state', state);
    window.location = this.authServer + this.authorize +
      '?client_id='+this.clientId+
      '&redirect_uri=' + this.redirectUri +
      '&response_type=' + this.responseType +
      '&state='+ state;
  },

  //获取token(约等于登录)通过后端获取因为要使用到client_secret

  //退出登录
  logout() {

    let accessToken = sessionStorage.getItem('access_token');
    localStorage.removeItem('userInfo')
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem("roles");
    store.commit('setUserValue',null)
    window.location = this.authServer + this.logoutUrl+ '?redirect_uri=http://139.9.139.63:8099/&access_token='+accessToken;
  },


  getState() {
     console.log("进入getState方法中")
    let state='';
    for (let i = 0; i < 6; i++) {
      state += this.FULL_CHARTER[Math.floor(Math.random() * 52)];
    }
    console.log(state)
    return state;
  },

  // /**
  //  * 获取url参数
  //  */
  // getQueryVariable(variable) {
  //   var query = window.location.search.substring(1);
  //   var vars = query.split("&");
  //   for (var i=0;i<vars.length;i++) {
  //     var pair = vars[i].split("=");
  //     if(pair[0] == variable){return pair[1];}
  //   }
  //   return '';
  // }

}

export default ssoconfig
