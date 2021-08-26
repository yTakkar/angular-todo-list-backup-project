var app = angular
    .module("app", [])
    .controller("ctrl", function($scope){
        var todoList = this;
        var todos = [
            {text: "Learn Angular JS", done: false},
            {text: "Build an app", done: false}
        ];

        $scope.todos = todos;

        $scope.todosRemaining = function(){
            var count = 0;
            angular.forEach(todos, function(todo){
                count+= todo.done ? 0 : 1;
            });
            return count;
        }

        $scope.totalTodos = function(){
            return $scope.todos.length;
        }

        $scope.addTodo = function(){
            $scope.todos.push({text: $scope.text, done:false});
            $scope.text = '';
        }

        $scope.archive = function(){
            var oldTodos = $scope.todos;
            $scope.todos = [];
            angular.forEach(oldTodos, function(todo){
                if(!todo.done) $scope.todos.push(todo);
            })
        }

    });