"use strict";app.controller("SignupFormController",["$scope","$location","$state","$auth",function($scope,$location,$state,$auth){$scope.user={},$scope.authError=null;var decodedNext=decodeURIComponent($state.params.next);$scope.signup=function(){$scope.authError=null;var allEncoded=$scope.user.firstName+"|"+$scope.user.lastName+"|"+$scope.user.username+"|"+$scope.user.email+"|"+$scope.user.password+"|"+$scope.user.agree;$auth.signup({0:allEncoded}).then(function(res){if($auth.setToken(res.data.token),$state.params.next)var pathFolder=decodedNext.split("/")[1];"404"!==pathFolder&&"logout"!==pathFolder&&"lockme"!==pathFolder&&"access"!==pathFolder?$location.path(decodedNext).search({}):$location.path("/").search({})})["catch"](function(res){$scope.authError=res.data})}}]);