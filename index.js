var button= $('button');
var todo= $('.todo');
var item= $('.item');

button.on('click',addToList);
function addToList(){
  event.preventDefault();
  item.append(`
    <div class="new">
      <input id="checkbox" type="checkbox">
      <p>${todo.val()}</p>
    </div>`);
}
