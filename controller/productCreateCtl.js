var addproduct= angular.module('addproduct' ,[]);

var addProductController =  function ($scope){
    var model=this;
    model.addproduct=function (){
        alert("it's came");
    };
};

addproduct.controller("adproductcon" , ["$scope",addProductController ]);