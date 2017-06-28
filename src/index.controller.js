class MainCtr {
    constructor($rootScope, $state) {
        this.$rootScope = $rootScope;
        this.$state = $state;

    }
}

MainCtr.$inject = ['$rootScope', '$state'];
export default MainCtr;