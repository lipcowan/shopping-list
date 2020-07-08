/* eslint-disable no-undef */
'use strict';

// add code to list, duplicating code

function addItem(item) {
    
  if(!item){
    item = 'invalid entry';        
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
    let itemName = $($(this).parents('li').children()[0]);
    itemName.toggleClass('shopping-item__checked');
  });
}

$(shoppingListMain);


/*

let listItems = [];

function mainFunc() {

    --- to test while developing --- renderItems(listItems);

$("#submit").click(function() {
    let item = $('#item').val();  --- this is gathing input to textbox with the ID item
    listItems.push({name:item, completed:false});
    console.log(item); --- this is to text the function works
    renderItems(listItems);
})

}

function renderItems(arr) {
    let template = [];
    for (i=0; i<arr.length; i++) {
        template.push(createTemplate(arr[i],i));
    }
    console.log(template);
    $("#list").html(template.join("")) ---- render array of html list items as string to ul tag on html page

}

function createTemplate(item,i) {
    let completed = item.completed ? "completed": "";
    return `<li data-index="${i}"> 
    ${item.name}</li> 
    <button class="complete"> Complete </button> 
    <button class="delete"> Delete </button>`;
}

$("ul").on("click",".complete", function(event) {
    event.preventDefault();
    let index = ($(event.target).parent().data("index"));  ---- getting event target referencing the parent element to access the data attribute (array index)
    console.log(index);
    listItems[index].completed = true;
    console.log($(this).text());
    renderItems(listItems);
});

$("ul").on("click",".delete"), function(event) {
    event.preventDefault();
    let index = ($(event.target).parent().data("index"));
    listItems.splice(index,1);
    renderItems(listItems);

}

$(mainFunc):

*/