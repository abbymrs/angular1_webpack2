class MainCtr {
    constructor($rootScope, $scope, $location) {
        this.$rootScope = $rootScope;
        this.$scope = $scope;
        var path = $location.path();
        var reg = /\/cssp\//g;
        var url = path.replace(reg, '');
        console.log(url);
        this.currentUrl = (url == '/') ? 'home' : url;
        this.user = {};
        this.valid = true;
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

    isChineseChar(str) {
        if (str) {
            str = str.replace(/\s/g, '');
            var reg = /[\u3400-\uFE4F]+/g;
            if (reg.test(str)) {
                console.log('chinese');
                return true;
            }
            console.log('english');
            return false;
        }
    }

    filterInput() {
        this.maxLength = 5;
        for (var key in this.user) {
            var val = this.user[key];
            if (this.isChineseChar(val)) {
                this.maxLength = 10;
            }
            if (val.length > this.maxLength) {
                this.valid = false;
                this.errorMsg = 'the max length for this field is ' + this.maxLength;
            }
        }

    }

    confirm() {
        this.filterInput();
        console.log(this.maxLength);
        var btn = document.querySelector('.btn');
        var form = this.findParent(btn, '.myform');
        // console.log(form);
        if (!this.valid) {
            return;
        }
        console.log(this.user);
    }

    hasEle(nodeList, ele) {
        for (var i = 0; i < nodeList.length; i++) {
            if (nodeList[i] == ele) return true;
        }
        return false;
    }

    findParent(ele, selector) {
        if (ele) {
            var cur = ele.parentNode;
            var nodeList = document.querySelectorAll(selector);
            while (cur && !this.hasEle(nodeList, cur)) {
                cur = cur.parentNode;
            }
            return cur;
        }
    }

}

MainCtr.$inject = ['$rootScope', '$scope', '$location'];
export default MainCtr;