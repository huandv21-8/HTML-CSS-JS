console.log('Hello world');
var $form, width, height, area;
$form = $('calculator');

$('form input[type="text"]').on('blur', function() {
  console.log('You entered', this.value);
});





$('#calculator').on('submit',function (e){
  e.preventDefault();
  console.log('Clicked submit...');
  width = $('#width').val();
  console.log('width', width);
  heigth = $('#height').val();
  console.log('height', height);

  area = width * height;
  console.log(area);

  $form.append('<p>' + area + '</p>')


});
