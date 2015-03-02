
//show winner idea = fade out all,

 $(document).ready(function(){

$('#start').click(function() {
var Animal = function(s, f, n){
  this.speed = s;
  this.focus = f;
  this.name = n;
  this.position = 0;
  this.report = function() {
    return this.name + " is at " + this.position;
  };
  this.run = function(){
    if (this.focus > (Math.random()*10)) {
    this.position += this.speed;
    }
  };
  this.notYetWon = function(){
    var distance = 50;
    return this.position < distance;
  }
}

var turtle = new Animal (4, 7.5, "Turt"),
    rabbit = new Animal (8, 2, "Abbott"),
    corgi = new Animal (5, 5, "Allen");

var distance = 30;
while(turtle.notYetWon() && rabbit.notYetWon() && corgi.notYetWon()){
  turtle.run();
  rabbit.run();
  corgi.run();
};

console.log(turtle.report());
console.log(rabbit.report());
console.log(corgi.report());


if (corgi.position > turtle.position && rabbit.position){
  // alert("Allen the Corgi wins!");
    $('#corgi').addClass('winner');
    $('#turtle').addClass('loser');
    $('#rabbit').addClass('loser');

}
  else if (rabbit.position > turtle.position && corgi.position){
    $('#rabbit').addClass('winner')
    $('#turtle').addClass('loser');
    $('#corgi').addClass('loser');
  }
  else {
    $('#turtle').addClass('winner')
    $('#corgi').addClass('loser');
    $('#rabbit').addClass('loser');
  };


  var raceResult = function(){
    var $results = $("#winner");
    $('#click').click(function(){
      $results.append("<p>" + turtle.report() + "</p>" + "<p>" + rabbit.report() + "</p>" + "<p>" + corgi.report() + "</p>");
    })
  };
  raceResult();
});

});



