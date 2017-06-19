import homeCtrl from './home.controller'

let homeApp = angular.module('homeApp', [])
    .controller('homeCtrl', homeCtrl);

export default homeApp;