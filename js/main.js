const list = document.querySelector('#list');

Sortable.create(list, {
  animation: 150,
  chosenClass: "seleccionado",
  //ghostClass: "fantasma",
  dragClass: "drag",
  onEnd: () => {
    console.log("Se cambio la posicion de un elemento")
  }
});
