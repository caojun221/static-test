angular.module('todoApp', []).controller('TodoListController', function () {
  var todoList = this;
  todoList.todos = [
      {'text': 'todo1', 'done': false},
      {'text': 'todo2', 'done': false}
  ];

  todoList.totalTodos = function () {
    return todoList.todos.length;
  };

  todoList.clearCompleted = function () {

    var oldTodos = todoList.todos;
    todoList.todos = [];
    angular.forEach(oldTodos, function (todo) {
      if (!todo.done) {
        todoList.todos.push(todo);
      }
    })
  };

  todoList.addTodo = function () {
    todoList.todos.push({'text':todoList.formTodoText, 'done':false});
    todoList.formTodoText = '';
  }
});