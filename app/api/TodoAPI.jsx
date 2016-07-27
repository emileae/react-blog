//var $ = require('jQuery');

module.exports = {
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
      // if ( searchText.length > 0 ){
      //   var searchTextLower = searchText.toLowerCase();
      //   if ( text.indexOf(searchTextLower) > -1 ){
      //     return true
      //   }else{
      //     return false
      //   };
      // }else{
      //   return true
      // }
    });

    // sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      // -1 => a comes before b
      // 1 => b comes before a
      // 0 => no change

      if (!a.completed && b.completed){
        return -1
      }else if (a.completed && !b.completed){
        return 1
      }else{
        return 0
      };

    });

    return filteredTodos;
  }
};
