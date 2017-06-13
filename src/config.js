let router = function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/cssp/home')
        // $stateProvider
        //     .state('cssp', {
        //         url: '/cssp',
        //         template: `
        //             <div class="wrap">
        //                 <div ui-view></div>
        //             </div>
        //         `
        //     })
        //     .state('cssp.home', {
        //         url: '/home',
        //         templateUrl: '/src/home/home.html'
        //     })
        //     .state('cssp.profile', {
        //         url: '/profile',
        //         templateUrl: '/src/profile/profile.html'
        //     })
        //     .state('cssp.messages', {
        //         url: '/messages',
        //         templateUrl: '/src/messages/messages.html'
        //     })

    $locationProvider.html5Mode(true);
}

router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default router;