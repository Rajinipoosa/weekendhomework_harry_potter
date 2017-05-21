
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
 var li = document.createElement("li")
 li.innerText =  '"species":'+character.species ;
 harryPotterContainer.appendChild(li);

 var li = document.createElement("li")
 li.innerText =  '"gender":'+character.gender ;
 harryPotterContainer.appendChild(li);


 var li = document.createElement("li")
 li.innerHTML =  '<img src="'+character.image+'" width = "80%" height = "50%"/>';

 
harryPotterContainer.appendChild(li);
