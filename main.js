class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}
class TodoList extends List {
  constructor() {
    super();
  }
}

const minhaLista = new TodoList();

var btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.onclick = function() {
  minhaLista.add('New Todos');
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const newArray = array.map(x => x * 2);
