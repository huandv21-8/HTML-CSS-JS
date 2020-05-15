//bảng cửu chương từ 4 -> 9//

var i=9;
var j=1;
var huandv='';

for(i=4;i<10;i++)
{
    document.write('</tr>');
  for(j=1; j<=10; j++)
  {
    huandv = huandv + i + 'x' + j + '=' + (j*i) + '<br>';
      document.write('</th>');
  }

}
document.getElementById('blackboard').innerHTML = huandv;


//bảng cửu chương 9//

 /*var text= '';
 var i;
 var n=9;
 var b;
 for (i=1 ; i<=10; i++)
 {

   text = text + n + 'x' + i + '=' + (n*i) +'<br>';
 }
 document.getElementById('blackboard').innerHTML = text;*/
