/* eslint-disable no-undef */
'use strict';

// add code to list, duplicating code

function addItem(item) {
    
  if(!item){
   item = "invalid entry";        
  }

  return `<li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
    </li>`;

}


function shoppingListMain() {
    let formInput = $('#js-shopping-list-form input').first();
    let shopForm = $('#js-shopping-list-form');

  //submitting new item to list

  $(shopForm).submit(function (event) {
    event.preventDefault(); 
    //console.log(formInput);
    // adding to list
    $('.shopping-list').append(addItem(formInput.val()));
    // clearing input
    formInput.val('');
  });

  // deleting the list item using the button, we're selecting the closest "li" to that button for deletion

  $('html').on('click', '.shopping-item-delete', function (event) {
    event.preventDefault();
    event.target.closest('li').remove();
  });

  $('html').on('click','.shopping-item-toggle', function (event) {
    event.preventDefault();
    let itemName = $($(event.target).parents('li').children()[0]);
    itemName.toggleClass('shopping-item__checked');
  });
}

$(shoppingListMain);
