

var x = new Date().getHours();
var h = "EVENT";
if ( 0 < x && x <= 12) {
  document.getElementById("time").innerHTML = h + " " + ":" +"WELCOME RECEPTION";
}else if (12 < x && x <= 13) {
  document.getElementById("time").innerHTML =  h + " " + ":" +"STORYTRLLING & TASTING";
}else if ( 13 < x && x <= 14) {
  document.getElementById("time").innerHTML =  h + " " + ":" +"WINE LUNCHEON";
}else if ( 14 < x && x <= 15) {
    document.getElementById("time").innerHTML =  h + " " + ":" +"AGUILLAR FAMILY WINES";
}else{
   document.getElementById("time").innerHTML = h + " " + ":" +"WINE & CHEESE TASTING";
 }

/*
 var today = new Date();
 var hourNow = today.getHours();
 var greeting;

 if(hourNow>=12 && hourNow<13 ){
   greeting = 'WELCOME RECEPTION';
 }
 else if(hourNow>= 13 && hourNow<14){
   greeting = 'STORYTELLING & TASTING';
 }
 else if (hourNow >= 14 && hourNow < 15) {
   greeting = 'WINE LUNCHEON';
 }
 else if (hourNow >= 15 && hourNow < 16) {
   greeting = 'AGUILLAR FAMILY WINES';
 }
 else if (hourNow >= 16 ) {
   greeting = 'WINE & CHEESE TASTING';
 }
 else{
   greeting = 'Welcome';
 }
 document.write('<th>' + greeting + '</th>')
*/
