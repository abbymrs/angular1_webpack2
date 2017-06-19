import profileCtrl from './profile.controller';

let profileApp = angular.module('profileApp', [])
    .controller('profileCtrl', profileCtrl)

export default profileApp;