<template>
    <div class="dowebok">
        <div class="logo"></div>
        <div class="form-item">
            <input id="username" type="text" name="username" v-model="account" autocomplete="off" placeholder="账号">
            <p class="tip" >请输入合法的账号</p>
        </div>
        <div class="form-item">
            <input id="password" type="password" name="passwd" v-model="password" autocomplete="off" placeholder="登录密码">
            <p class="tip">邮箱或密码不正确</p>
        </div>
        <div class="form-item">
            <button id="submit" @click="login">登 录</button>
        </div>
        <div class="reg-bar">
            <a class="reg" href="javascript:" @onclick="register">立即注册</a>
            <a class="forget" href="javascript:" @onclick="forgetPassword">忘记密码</a>
        </div>
    </div>
</template>

<script>

    import {login,httpreq} from "../network/apis";
    import CONSANTS from "../configs/consants";

    export default {
        name: "login",
        data() {
            return {
                account:'',
                password: '',
            }
        },


        methods : {
            register(){
                this.$message.info('去注册..............')
            },
            login: function () {
                // this.$message.info('去登录..............');
                // console.log("账号:" + this.account + " 密码:" + this.password);
                // console.log(this.$utils.parseUrl(window.location.href));
                // let redirectUrl = this.$utils.isEmpty(this.$route.query.redirectUrl) ;


                login(this.account, this.password)
                    .then(res => {
                        console.log("login响应信息:" + JSON.stringify(res));
                        if (res.code === CONSANTS.AUTH_SUCCESS) {
                            console.log("login成功:" + res.msg);
                            // console.log(this.$utils.parseUrl(window.location.href));
                            // console.log(this.$route.query.redirectUrl);

                            window.location = res.data
                            // if(!this.$utils.isEmpty(this.$route.query.redirectUrl)){
                            //     window.location = this.$route.query.redirectUrl
                            // }else {
                            //     this.$router.replace('/')
                            // }
                        }else if(res.code === CONSANTS.AUTH_FAIL){
                            console.log("login失败:" + res.data);
                            this.$message.error(res.data)
                        }
                    })
                    .catch(err => {
                        console.log("login失败:" + err);
                        this.$message.error(err)
                    })

            },
            forgetPassword(){
                this.$message.info('忘记密码..............')
            }
        },

        created() {

            // window.location = this.$route.query.redirectUrl
            // httpreq(this.$route.query.redirectUrl)
            // .then(res => {
            //     console.log(res)
            // }).catch(err => {
            //     console.log(err)
            // })
        }
    }
</script>

<style scoped>

    .dowebok { position: absolute; left: 50%; top: 50%; width: 430px; height: 550px; margin: -300px 0 0 -215px; border: 1px solid #fff; border-radius: 20px; overflow: hidden;}
    .logo { width: 104px; height: 104px; margin: 50px auto 80px; background: url(../assets/login.png) 0 0 no-repeat; }
    .form-item { position: relative; width: 360px; margin: 0 auto; padding-bottom: 30px;}
    .form-item input { width: 288px; height: 48px; padding-left: 70px; border: 1px solid #fff; border-radius: 25px; font-size: 18px; color: #fff; background-color: transparent; outline: none;}
    .form-item button { width: 360px; height: 50px; border: 0; border-radius: 25px; font-size: 18px; color: #1f6f4a; outline: none; cursor: pointer; background-color: #fff; }
    #username { background: url(../assets/emil.png) 20px 14px no-repeat; }
    #password { background: url(../assets/password.png) 23px 11px no-repeat; }
    .tip { display: none; position: absolute; left: 20px; top: 52px; font-size: 14px; color: #f50; }
    .reg-bar { width: 360px; margin: 20px auto 0; font-size: 14px; overflow: hidden;}
    .reg-bar a { color: #fff; text-decoration: none; }
    .reg-bar a:hover { text-decoration: underline; }
    .reg-bar .reg { float: left; }
    .reg-bar .forget { float: right; }
    .dowebok ::-webkit-input-placeholder { font-size: 18px; line-height: 1.4; color: #fff;}
    .dowebok :-moz-placeholder { font-size: 18px; line-height: 1.4; color: #fff;}
    .dowebok ::-moz-placeholder { font-size: 18px; line-height: 1.4; color: #fff;}
    .dowebok :-ms-input-placeholder { font-size: 18px; line-height: 1.4; color: #fff;}

    @media screen and (max-width: 500px) {
        * { box-sizing: border-box; }
        .dowebok { position: static; width: auto; height: auto; margin: 0 30px; border: 0; border-radius: 0; }
        .logo { margin: 50px auto; }
        .form-item { width: auto; }
        .form-item input, .form-item button, .reg-bar { width: 100%; }
    }


</style>
