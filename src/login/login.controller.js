class loginCtrl {
    constructor($location, $state, $timeout, apiService) {
        this.$location = $location;
        this.apiService = apiService;
        this.$state = $state;
        this.$timeout = $timeout;

        this.user = {};
        this.logObj = {
            login: 'Login',
            register: 'Register'
        };
        this.isLoginPage = true;
        this.isLogin = false;
        this.msg = '';

        this.switchLogin();
    }
    switchLogin() {
        this.$location.path().indexOf('login') > -1 ? this.isLoginPage = true : this.isLoginPage = false
    }

    login(data) {
        this.apiService.login(data, res => {
            if (res.status == 1) {
                this.isLogin = true;
                this.$timeout(_ => {
                    this.$state.go('cssp.home');
                }, 2000);
            } else {
                this.isLogin = false;
            }
            this.msg = res.msg;
        }, err => {
            console.log(err);
        });
    }

    register(data) {
        this.apiService.register(data, res => {
            if (res.status == 1) {
                this.isLogin = true;
                this.$timeout(_ => {
                    this.$state.go('cssp.home');
                }, 2000);
            } else {
                this.isLogin = false;
            }
            this.msg = res.msg;
        }, err => {
            console.log(err);
        });
    }
}
loginCtrl.$inject = ['$location', '$state', '$timeout', 'apiService'];
export default loginCtrl;