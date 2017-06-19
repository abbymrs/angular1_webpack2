let router = function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/cssp/home')
    $stateProvider
        .state('cssp', {
            url: '/cssp',
            template: `
                <div class="wrap">
                    <div ui-view></div>
                </div>
            `
        })
        .state('cssp.home', {
            url: '/home',
            templateUrl: '/src/home/home.html',
            controller: 'homeCtrl',
            controllerAs: 'vm'
        })
        .state('cssp.profile', {
            url: '/profile',
            templateUrl: '/src/profile/profile.html',
            controller: 'profileCtrl',
            controllerAs: 'vm'
        })
        .state('cssp.messages', {
            url: '/messages',
            templateUrl: '/src/messages/messages.html',
            controller: 'msgCtrl',
            controllerAs: 'vm'
        })
        .state('cssp.login', {
            url: '/login',
            templateUrl: '/src/login/login.html',
            controller: 'loginCtrl',
            controllerAs: 'vm'
        })
        .state('cssp.register', {
            url: '/register',
            templateUrl: '/src/login/login.html',
            controller: 'loginCtrl',
            controllerAs: 'vm'
        })

    $locationProvider.html5Mode(true);
}

router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default router;