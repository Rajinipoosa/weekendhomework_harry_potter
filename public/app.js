var app = function() {
var url = 'http://hp-api.herokuapp.com/api/characters';
    studentDetails();
     staffDetails();
    makeRequest("GET", url, requestComplete);

    

   
  };
  
  var studentDetails = function(){
    var getStudentsDetails = document.getElementById('btnstudent');
    var characterUnOrderedList = document.getElementById('characters');

    getStudentsDetails.addEventListener('click', function(){
      characterUnOrderedList.innerHTML = "";
      var url = 'http://hp-api.herokuapp.com/api/characters/students';
      makeRequest("GET", url, requestComplete);
    });
  }
   
   var staffDetails = function(){
     var getStudentsDetails = document.getElementById('btnstaff');
     var characterUnOrderedList = document.getElementById('characters');

     getStudentsDetails.addEventListener('click', function(){
       characterUnOrderedList.innerHTML = "";
       var url = 'http://hp-api.herokuapp.com/api/characters/staff';
       makeRequest("GET", url, requestComplete);
     });
   }
    

  var makeRequest = function(method, url, callback){
    var request = new XMLHttpRequest();
    request.open(method, url);
    request.addEventListener('load', callback);
    request.send();
   request.addEventListener('load', function() {
     harryPotterCharts(request.responseText);
   });
   
  }

  var requestComplete = function(){
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var data = JSON.parse(jsonString);
    display(data);
  }

  var harryPotterCharts = function(responseText){
    var characters = JSON.parse(responseText);
    studentGenderData = [];
    for(character of characters) {
      studentGenderData.push({
        name: character.name,
        y: character.gender
      });
        new PieChart(studentGenderData);

    }
    
   
  }
  var display = function(data){
     
    var harryPotterContainer = document.getElementById('characters');

       data.forEach(function(character){
      var ul = document.createElement('ul');
       ul.innerHTML = "";
      var li = document.createElement("li")
      li.innerHTML =  "Name: " +" "+ character.name ;
      harryPotterContainer.appendChild(li);

      var li = document.createElement("li")
      li.innerText =  "Species: "+ " " +character.species ;
      harryPotterContainer.appendChild(li);

      var li = document.createElement("li")
      li.innerText =  "Gender: "+" " +character.gender ;
      harryPotterContainer.appendChild(li);


      var li = document.createElement("li")
      li.innerHTML =  '<img src="'+character.image+'" width = "80%" height = "50%"/>';
      harryPotterContainer.appendChild(li);
      
     

  });
       

        

}


window.addEventListener('load',app)