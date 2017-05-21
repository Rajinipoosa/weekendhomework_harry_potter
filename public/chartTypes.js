
bindEvents();
var bindEvents = function(){
  var getStudentsDetails = document.getElementById('search-query');
  var characterUnOrderedList = document.getElementById('characters');

  searchQuery.addEventListener('keyup', function(){
    characterUnOrderedList.innerHTML = '';
    var url = 'http://hp-api.herokuapp.com/api/characters/students';
    makeRequest("GET", url, requestComplete);
  });
}
 