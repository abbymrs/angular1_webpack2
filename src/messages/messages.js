import msgCtrl from './messages.controller';

let msgApp = angular.module('msgApp', [])
    .controller('msgCtrl', msgCtrl)

export default msgApp;