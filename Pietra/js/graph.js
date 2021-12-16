
(function(){

  var app = angular.module('graphApp',[]);
  
  app.controller('graphController', function($scope){

$scope.ratio = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

    $scope.tiles = [
      {xLen:300, yLen:300, quantity:12000},
      {xLen:300, yLen:400, quantity:400},
      {xLen:300, yLen:500, quantity:10000},
      {xLen:400, yLen:400, quantity:600},
      {xLen:400, yLen:600, quantity:5000},
      {xLen:500, yLen:500, quantity:20000},
      {xLen:500, yLen:600, quantity:12000},
      {xLen:600, yLen:600, quantity:4000}
    ];

  
    // Data 
    $scope.data = [
      { xl: 37, xr: 170 },
      { xl: 32, xr: 230 },
      { xl: 29, xr: 228 },
      { xl: 26, xr: 231 },
      { xl: 25, xr: 232 },
      { xl: 29, xr: 235 },
      { xl: 26, xr: 236 },
      { xl: 25, xr: 237 },
      { xl: 26, xr: 235 },
      { xl: 33, xr: 238 },
      { xl: 32, xr: 237 },
      { xl: 34, xr: 233 },
      { xl: 31, xr: 234 },
      { xl: 33, xr: 240 },
      { xl: 34, xr: 238 },
      { xl: 39, xr: 233 },
      { xl: 37, xr: 232 },
      { xl: 36, xr: 236 },
      { xl: 33, xr: 238 },
      { xl: 34, xr: 235 },
      { xl: 35, xr: 238 },
      { xl: 34, xr: 237 },
      { xl: 34, xr: 235 },
      { xl: 32, xr: 238 },
      { xl: 34, xr: 237 },
      { xl: 29, xr: 240 },
      { xl: 37, xr: 232 },
      { xl: 29, xr: 234 },
      { xl: 32, xr: 236 },
      { xl: 31, xr: 238 },
      { xl: 34, xr: 235 },
      { xl: 33, xr: 238 },
      { xl: 34, xr: 237 },
      { xl: 34, xr: 235 },
      { xl: 32, xr: 238 },
      { xl: 34, xr: 237 },
      { xl: 29, xr: 233 },
      { xl: 31, xr: 234 },
      { xl: 33, xr: 240 },
      { xl: 32, xr: 242 },
      { xl: 31, xr: 241 },
      { xl: 37, xr: 232 },
      { xl: 31, xr: 234 },
      { xl: 32, xr: 236 },
      { xl: 31, xr: 238 },
      { xl: 34, xr: 235 },
      { xl: 33, xr: 238 },
      { xl: 34, xr: 237 },
      { xl: 34, xr: 235 },
      { xl: 32, xr: 238 },
      { xl: 34, xr: 237 },
      { xl: 31, xr: 234 },
      { xl: 33, xr: 240 },
      { xl: 38, xr: 238 },
      { xl: 40, xr: 240 },
      { xl: 40, xr: 238 },
      { xl: 40, xr: 241 },
      { xl: 42, xr: 216 },
      { xl: 49, xr: 212 }
    ];


// Options
    $scope.xrazm= 350;
    $scope.yrazm= 400;
    $scope.step = 5;
    $scope.width = 500;
    $scope.height = 400;

var xLeft=0,
    xRigh=250;
var iTop=4,
    iBott=7;
var i,l,j,Smxv;
var Sv=[64];
var svLen=64;
var Indx=[16];
var maxY=$scope.data.length;
   
  
// The size X

$scope.xrLeft=255;
$scope.xrRight=0;
$scope.yrLeft=0;
$scope.yrRight=0;

function findInscribedRectangle() {
   for (xLeft=0, xRigh=250, i=iTop; i < (maxY-iBott); i++) {
        if ($scope.data[i].xl > xLeft) 
          xLeft = $scope.data[i].xl;
        if ($scope.data[i].xr < xRigh) 
          xRigh = $scope.data[i].xr;
  }
} 

// The size X
  for (i=0; i < maxY; i++)  {
    if ($scope.data[i].xl  <= $scope.xrLeft)  {
        $scope.xrLeft = $scope.data[i].xl;
        $scope.yrLeft = i;
     }
    if ($scope.data[i].xr  >= $scope.xrRight)  {
        $scope.xrRight = $scope.data[i].xr;
        $scope.yrRight = i;
     }
  }

   for (iTop=0; iTop < 8; iTop++) {                 //  All rectangle
    for (iBott=0; iBott < 8; iBott++) { 
      findInscribedRectangle();
      Sv[iTop*8+iBott]=(xRigh - xLeft) * (maxY - iBott - iTop);
    }
   }
 
// Find 10 Max rectangle 
   for (i=0; i < 10; i++) {                      
     for (Smxv=0, j=0; j < svLen; j++)
       if (Sv[j] > Smxv) { 
         Smxv=Sv[j];
	 l=j;
       } // 
     Indx[i]=l;
     Sv[l]=0;       // zero Sv rectangle
   }                                               

//alert(Indx[0]); 

    iTop= parseInt(Indx[0] / 8); //
    iBott=Indx[0]-iTop*8;
    findInscribedRectangle();

$scope.xRect=xLeft;
$scope.widthRect=xRigh-xLeft;
$scope.yRect=iTop * $scope.step;
$scope.heightRect = (maxY-iBott-iTop) * $scope.step;

$scope.maxY=maxY;

//$scope.xRect=40;
//$scope.widthRect=190;
//$scope.yRect=4*$scope.step;
//$scope.heightRect=(51)*$scope.step;

  // End Controller  
    });

})();