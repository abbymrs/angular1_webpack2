class homeCtrl {
    constructor() {
        this.user = {};
        this.valid = true;
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

homeCtrl.$inject = [];
export default homeCtrl;