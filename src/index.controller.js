class MainCtr {
    constructor($rootScope, $location) {
        this.$rootScope = $rootScope;
        var path = $location.path();
        var reg = /\/cssp\//g;
        var url = path.replace(reg, '');
        console.log(url);
        this.currentUrl = (url == '/') ? 'home' : url;
    }

    changeState() {
        this.$rootScope.$on('$stateChangeSuccess', (event, route) => {
            this.currentUrl = route.url.substring(1);
            let wrap = document.querySelector('.wrap');
            let body = document.body;
            let html = document.documentElement;

            if (wrap) {
                window.scrollTo(0, 0);
            }
        });
    }


}

MainCtr.$inject = ['$rootScope', '$location'];
export default MainCtr;