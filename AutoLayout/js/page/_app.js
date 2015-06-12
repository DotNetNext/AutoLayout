var layoutApp = angular.module('layoutApp', []);
var jqApp = jQuery;
jqApp.controller = function (jqApp, init) {
    if (init != null) {
        $(function () {
            init();
        })
    }
}