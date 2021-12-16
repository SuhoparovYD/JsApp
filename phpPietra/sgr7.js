var ar1=[ 57, 155, 47, 43, 37, 33, 32, 31, 34, 33, 34, 32, 34, 32, 34, 32, 31, 33, 32, 28, 29, 27, 33, 32, 34, 32, 34, 32, 34, 32, 34, 29, 33, 33, 33, 32, 31, 27, 33, 33, 33, 32, 31, 28, 29, 32, 34, 30, 30, 28, 31, 28, 29, 27, 33, 36, 40, 42, 44,132];
var ar2=[110,220,228,231,232,234,236,238,235,238,237,233,235,238,237,233,234,237,240,238,242,241,235,245,238,237,245,238,238,239,244,244,240,244,243,244,237,239,238,243,242,244,240,241,243,242,235,241,238,247,248,238,244,243,245,238,237,238,239,220];
var noMaxRect = 0;
var yMax=1;
function drawSlab() {
   // рисуем плиту
    var drawingCanvas = document.getElementById('mypicture');
    if(drawingCanvas && drawingCanvas.getContext) {
     var context = drawingCanvas.getContext('2d');
     
     context.strokeStyle = "#000";
     context.fillStyle = "#eef";
     context.beginPath();
     context.fillRect(0,0,500,500);
     context.closePath();
     context.stroke();
     context.fill();

var i=0;
var yTop=20;
var yStep=5;
 yMax=ar1.length-1;

     context.beginPath();
     context.strokeStyle = "#045";
     context.lineWidth = 2;
     context.fillStyle = "#045";

 context.moveTo(ar2[0], yTop);
 context.lineTo(ar1[0], yTop);

for (i=0; i < ar1.length-1; i++)  {
     context.moveTo(ar1[i], yTop+i*yStep);
     context.lineTo(ar1[i+1], yTop+(i+1)*yStep);
     context.moveTo(ar2[i], yTop+i*yStep);
     context.lineTo(ar2[i+1], yTop+(i+1)*yStep);  
  }
 context.moveTo(ar2[i], yTop+i*yStep);
 context.lineTo(ar1[i], yTop+i*yStep);

 context.closePath();
 context.stroke();

var xLeft=255;
var xRight=0;
var yLeft=0;
var yRight=0;
var maxY=ar1.length;
var I,J,i;
var svLen;
var l,j,Smxv;
var Sv=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var Indx=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

  for (i=0; i < ar1.length; i++)  {
    if (ar1[i]  <= xLeft)  {
        xLeft = +ar1[i];
        yLeft = i;
     }
    if (ar2[i]  >= xRight)  {
        xRight = +ar2[i];
        yRight = i;
     }
  }
  
context.beginPath();
 context.strokeStyle = "#711";
 context.fillStyle = "#000";
 context.lineWidth = 1;
 // выносные линии X
 context.moveTo(xLeft, yTop+yLeft*yStep);
 context.lineTo(xLeft, yTop+(yMax+18)*yStep-4);

 context.moveTo(xRight, yTop+yRight*yStep);
 context.lineTo(xRight, yTop+(yMax+18)*yStep-4);
// размерная линия X
 context.moveTo(xRight, yTop+(yMax+16)*yStep);
 context.lineTo(xLeft,  yTop+(yMax+16)*yStep);
// Стрелки  
 context.moveTo(xLeft, yTop+(yMax+16)*yStep);
 context.lineTo((xLeft+12), yTop+(yMax+16)*yStep+yStep/2);
 context.moveTo(xLeft, yTop+(yMax+16)*yStep);
 context.lineTo(xLeft+12, yTop+(yMax+16)*yStep-yStep/2);

 context.moveTo(xRight, yTop+(yMax+16)*yStep);
 context.lineTo(xRight-12, yTop+(yMax+16)*yStep+yStep/2);
 context.moveTo(xRight, yTop+(yMax+16)*yStep);
 context.lineTo(xRight-12, yTop+(yMax+16)*yStep-yStep/2);
 
 // выносные линии Y
 context.moveTo(ar2[0], yTop);
 context.lineTo(xRight+120, yTop);
 
 context.moveTo(ar2[yMax], yTop+yMax*yStep);
 context.lineTo(xRight+120, yTop+yMax*yStep);

// размерная линия Y
 context.moveTo(xRight+112, yTop);
 context.lineTo(xRight+112, yTop+(yMax)*yStep);

// Стрелки
 context.moveTo(xRight+112, yTop);
 context.lineTo(xRight+115, yTop+12);
 context.moveTo(xRight+112, yTop);
 context.lineTo(xRight+109, yTop+12);
 
 context.moveTo(xRight+112, yTop+yMax*yStep);
 context.lineTo(xRight+115, yTop+yMax*yStep-12);
 context.moveTo(xRight+112, yTop+yMax*yStep);
 context.lineTo(xRight+109, yTop+yMax*yStep-12);
 
 context.font = "16px Arial";
 context.fillText((xRight-xLeft)*10, (xRight)/2, yTop+(yMax+16)*yStep-yStep/2);
 context.fillText((yMax*yStep)*10,xRight+70, (yMax*yStep)/2);

     context.closePath();
     context.stroke();

   for (I=0; I < 8; I++)                  //  All rectangle
    for (J=0; J < 8; J++) {
      for (xLeft=0, xRigh=250, i=I; i <= maxY-J; i++) {
        if (ar1[i] > xLeft)  xLeft = ar1[i];
        if (ar2[i] < xRigh)  xRigh = ar2[i];
      }
      Sv[I*8+J]=(xRigh - xLeft) * (maxY-J - I);
    }

   svLen=Sv.length;

   for (l=0; l < 16; l++) {                        // Find 10 Max rectangle
     for (Smxv=0, j=0; j < svLen; j++)
       if (Sv[j] > Smxv) { 
         Smxv=Sv[j];
	 J=j;
       } // 
     Indx[l]=J;
     Sv[J]=0;                                   	// zero Sv rectangle
   }                                               	// for l
 
  for (l=0; l < 16; l++) {                      // View 10 Max rectangle
    I= parseInt(Indx[l] / 8); //
    J=Indx[l]-I*8;
    for (xLeft=0, xRigh=250, i=I; i < maxY-J; i++) {
        if (ar1[i] > xLeft)  xLeft = ar1[i];
        if (ar2[i] < xRigh)  xRigh = ar2[i];
    }
    if (l==noMaxRect)  {
      J=maxY-J;
      context.beginPath();
      context.strokeStyle = "#999";
      context.fillStyle = "#396";
	 	
       context.fillRect(xLeft,yTop+I*yStep,xRigh-xLeft,(J-I)*yStep)
	 /*
      context.lineWidth = 4;
      context.moveTo(xLeft, yTop+I*yStep);
      context.lineTo(xLeft, yTop+J*yStep);
      context.moveTo(xRigh, yTop+I*yStep);
      context.lineTo(xLeft, yTop+I*yStep);

      context.moveTo(xRigh, yTop+I*yStep);
      context.lineTo(xRigh, yTop+J*yStep);
      context.moveTo(xRigh, yTop+J*yStep);
      context.lineTo(xLeft, yTop+J*yStep);
	  */
var xTile =40;  
var yTile =50; 
  
  for (i=0; i < (xRigh-xLeft)/xTile; i++) { 
    context.moveTo(xLeft+i*xTile, yTop+I*yStep);
	context.lineTo(xLeft+i*xTile, yTop+J*yStep);
  }

for (i=0; i < (J-I)*yStep/yTile; i++) { 
    context.moveTo(xLeft, yTop+I*yStep +i*yTile);
	context.lineTo(xRigh, yTop+I*yStep +i*yTile);
  }	 

  
  context.fillStyle = "#111";
  context.font = "16px Arial";
  context.fillText("S =",xRight/2-30, yMax*yStep +50);
  context.fillText(((J-I)*yStep*(xRigh-xLeft)),xRight/2, yMax*yStep +50);
  
      context.closePath();
      context.stroke();
  }  
  } //for 10
 
    }
}

//добавить кнопку выбора максим прямоуг  и  плитки

function newSlab(){
  var xls= +document.forma1.xln.value;
  var xrs= +document.forma1.xrn.value;
  var ys= +document.forma1.yn.value;
  
  if (ys < yMax ) 
  {
     ar1[ys]=xls;
     ar2[ys]=xrs;
     drawSlab();
  }

}

function newMRect(){
	if (+document.NoMaxRect.noMR.value == noMaxRect) 
	   document.NoMaxRect.noMR.value++;
	if (+document.NoMaxRect.noMR.value >=16) 
		document.NoMaxRect.noMR.value=0;
	noMaxRect= +document.NoMaxRect.noMR.value;
	
	
	drawSlab();

}






  
 