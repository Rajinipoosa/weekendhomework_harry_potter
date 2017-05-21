var app = function(){
    var url = 'http://hp-api.herokuapp.com/api/characters';
    
    makeRequest("GET", url, requestComplete);
   
  }
  

  var makeRequest = function(method, url, callback){
    var request = new XMLHttpRequest();
    request.open(method, url);
    request.addEventListener('load', callback);
    request.send();
  }
  var requestComplete = function(){
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var data = JSON.parse(jsonString);
    display(data);
  }
  var display = function(data){
    // console.log(data);
    var harryPotterContainer = document.getElementById('characters');

       data.forEach(function(character){
      var ul = document.createElement('ul');
       ul.innerHTML = "";
      var li = document.createElement("li")
      li.innerText =  '"name":'+character.name ;
      harryPotterContainer.appendChild(li);

      var li = document.createElement("li")
      li.innerText =  '"species":'+character.species ;
      harryPotterContainer.appendChild(li);

      var li = document.createElement("li")
      li.innerText =  '"gender":'+character.gender ;
      harryPotterContainer.appendChild(li);


      var li = document.createElement("li")
      li.innerHTML =  '<img src="'+character.image+'" width = "80%" height = "50%"/>';

      
     harryPotterContainer.appendChild(li);

      

  });
}


window.addEventListener('load',app);