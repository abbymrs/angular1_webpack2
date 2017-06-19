class msgCtrl {
    constructor() {
        this.generateList();
    }

    generateList() {
        this.msgs = [];
        for (let i = 1; i <= 100; i++) {
            this.msgs.push('messages item ' + i);
        }
        return this.msgs;
    }
}

msgCtrl.$inject = [];
export default msgCtrl;