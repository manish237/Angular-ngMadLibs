angular.module('myApp',[])
.constant('VERSION',1.1)
.controller('MyCtrl',function (VERSION,$scope) {
    var ctrl = this;
    this.version  = VERSION;
    this.gender = 'M';
});
