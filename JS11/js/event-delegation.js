function getTarget(e) {
  if(!e){
    e = window.event;
  }
  return e.target || e.srcElement;
}

function itemDone(e) {
  //remove item from the List
  var terget, elParent, elGrandparent;
  target = getTarget(e);

  if(target.nodeName.toLowerCase() =="a"){
    elListItem = target.parentNote;
    elList = elListItem.parentNote;
    elList.removeChild(elListItem);
  }
  if ( target.nodeName.toLowerCase() =="em"){
    elListItem = target.parentNote.parentNote;
    elList = elListItem.parentNote;
    elList.removeChild(elListItem);
  }

  //prevent the link from taking you elsewhere
  if(e.preventDefault){
    e.preventDefault();
  }else{
    e.returnValur = false;
  }
  //set up event listener to call itemDone() on click
  var el = document.getElementById('shoppingList');
  if(el.addEventListener){
    el.addEventListener('click',function(e){
      itemDone(e);
    },false);
  }else{
    el.attachEvent('onclick',function(e){
      itemDone(e);
    });
  }










}
