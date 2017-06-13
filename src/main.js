import MainCtrl from './index.controller';
import angular from 'angular';
import 'angular-ui-router';
import 'angular-ui-router/release/stateEvents';
import 'bootstrap';

import router from './routes';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.less';

angular.module('app', [
        'ui.router',
        'ui.router.state.events'
    ])
    .controller('ctrl', MainCtrl)
    .config(router)