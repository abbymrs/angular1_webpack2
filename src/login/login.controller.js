class loginCtrl {
    constructor($location, $state, apiService) {
        this.$location = $location;
        this.apiService = apiService;
        this.$state = $state;

        this.user = {};
        this.logObj = {
            login: 'Login',
            register: 'Register'
        };
        this.isLoginPage = true;
        this.isLogin = false;

        this.switchLogin();
    }
    switchLogin() {
        this.$location.path().indexOf('login') > -1 ? this.isLoginPage = true : this.isLoginPage = false
    }

    login(data) {
        this.apiService.login(data, res => {
            this.isLogin = true;
            this.$state.go('cssp.home');
        }, err => {
            console.log(err);
        });
    }

    register(data) {
        this.apiService.register(data, res => {
            this.isLogin = true;
            this.$state.go('cssp.home');
        }, err => {
            console.log(err);
        });
    }
}
loginCtrl.$inject = ['$location', '$state', 'apiService'];
export default loginCtrl;