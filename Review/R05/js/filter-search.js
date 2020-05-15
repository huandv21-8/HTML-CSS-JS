(function () {         //lives in an IIfe
  var $imgs = $('img'); //lấy hình ảnh
  var $search = $('#filter-search');// lấy phần tử đầu vào
  var cache = [];  //tạo 1 bảng gọi là bộ đệm

  $imgs.each(function () {     //cho mỗi hình ảnh
    cache.push({             // thêm 1 đối tượng vào mảng bộ đếm
      element: this,         //this image
      text: this.alt.trim().toLowerCase()  //its alt text (lowercase trimmed)
    });
  });

function filter() {      //declare filter() function
  var query = this.value.trim().toLowerCase();   //get the query
  cache.forEach(function (img) {  //for each entry in cache pass image
    var index = 0;   // set indext to 0

    if (query) {   //if there is some query text
      index = img.text.indexOf(query);  //find if query is in there
    }

    img.element.style.display = index === -1 ? 'none' : '';  //show / hide
  });
}

if ('oninput' in $search[0]){   //if browserts supports input event
  $search.on('input', filter);  //use input event to call filter()
}else {                          //otherwise
  $search.on('keyup', filter);   //use keyup event to call filter
}

}());
