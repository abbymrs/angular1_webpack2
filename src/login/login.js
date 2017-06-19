import loginCtrl from './login.controller';

let loginApp = angular.module('loginApp', [])
    .controller('loginCtrl', loginCtrl)

export default loginApp;