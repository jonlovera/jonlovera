app.controller("ImgCropCtrl",["$scope",function(a){a.myImage="",a.myCroppedImage="",a.cropType="circle";var b=function(b){var c=b.currentTarget.files[0],d=new FileReader;d.onload=function(b){a.$apply(function(a){a.myImage=b.target.result})},d.readAsDataURL(c)};angular.element(document.querySelector("#fileInput")).on("change",b)}]);