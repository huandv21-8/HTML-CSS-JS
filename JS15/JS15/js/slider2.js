$('.slider').each(function() { //for every slider
  var $this = $(this);  //current slide
  var $group = $this.find('.slode-group'); //grt the slide container
  var $slides = $this.find('.slide'); // hold all slide
  var buttonArray = []; //hold navigation of button
  var currentIndex = 0; //crurent slide
  var timeout; //sets gap between auto-sliding

    function move(newIndex) {
      var animateLeft, slideLeft;
      //call advance here to set slide moves
      advance();

      //if ir is the current slide
      if($group.is(':animated') || currentIndex === newIndex){
        return;
      }
      buttonArray[currentIndex].renoveClass('active'); //remote class from item
      buttonArray[newIndex].addClass('active'); //add class to new item

      if(newIndex > currentIndex){ //if new item > current
        slideLeft = '100%'; //sit the new slide to the right
        animateLeft
      }
    }


  
})
