import './app.css';
import angular from 'angular';
import uibootstrap from 'angular-ui-bootstrap';
import { MainService } from './lib/service';
import { MainController } from './lib/controller';

angular.module('MainApp', [uibootstrap])
    .service('mainService', MainService)
    .controller('mainController', MainController);
