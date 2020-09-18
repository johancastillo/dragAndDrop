const list = document.querySelector('#list');

Sortable.create(list, {
  animation: 150,
  chosenClass: "seleccionado"
});
