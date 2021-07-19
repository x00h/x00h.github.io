function filter(tag) {
  setActiveTag(tag);
  showContainer(tag);
}

function setActiveTag(tag) {
  // loop through all items and remove active class
  var items = document.getElementsByClassName('tags-button');
  for(var i=0; i < items.length; i++) {
    items[i].setAttribute('class', 'tags-button');
  }

  // set the selected tag's item to active
  var item = document.getElementById(tag + '-item');
  if(item) {
    item.setAttribute('class', 'tags-button active');
  }
}

function showContainer(tag) {
  // loop through all lists and hide them
  var lists = document.getElementsByClassName('archive-group');
  for(var i=0; i < lists.length; i++) {
    lists[i].setAttribute('class', 'archive-group hidden');
  }

  // remove the hidden class from the list corresponding to the selected tag
  var list = document.getElementById(tag + '-container');
  if(list) {
    list.setAttribute('class', 'archive-group');
  }
}

if(window.location.hash) {
  var tag = window.location.hash.split('#')[1];
  // filter(tag);
  console.log("there is a hash in url");
  {% for post in posts %}
    console.log(post.title);
    // {% if post.tags contains page.tag %}
    // {% endif %}
  {% endfor %}
}
// console.log("Done");