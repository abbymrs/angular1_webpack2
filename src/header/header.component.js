let headerComponent = {
    templateUrl: '/src/header/header.component.html',
    controller: class headerCom {
        constructor($rootScope, $scope, $state) {
            this.$rootScope = $rootScope;
            this.$scope = $scope;
            this.$state = $state;

            this.isLogin = false;
        }
        $onInit() {
            this.$rootScope.$on('isLogin', (e, data) => {
                this.isLogin = data;
            });
        }
        logout() {
            this.isLogin = false;
            this.$state.go('cssp.home')
        }
    }
}
headerComponent.$inject = ['$rootScope', '$scope', '$state'];
export default headerComponent;