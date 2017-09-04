angular.module('myApp',['ngMessages'])
.constant('VERSION',1.1)
.controller('MyCtrl',function (VERSION,$scope) {
    var ctrl = this;
    ctrl.version  = VERSION;
    ctrl.gender = 'M';
    ctrl.validForm=false;
    ctrl.submit = function(form){
        console.log(form.$valid)
        if(form.$valid==true)
        {
            ctrl.validForm=true;
        }


        // console.log(inputForm.$valid);
        // console.log($scope.valid)
    }
    ctrl.clear = function(){
        ctrl.validForm=false;
        ctrl.fname=null;
        ctrl.dtask=null;
        ctrl.oceleb=null;
        ctrl.jtitle=null;
        ctrl.celeb=null;
        ctrl.hnum=null;
        ctrl.ttask=null;
        ctrl.uskill=null;
        ctrl.adj=null;


        // console.log(inputForm.$valid);
        // console.log($scope.valid)
    }
});
