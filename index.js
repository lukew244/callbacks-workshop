var time = 2000;
["Alpha", "Bravo", "Charlie"].forEach(function(word) {
  setTimeout(function() {console.log(word); }, time);
  time -= 1000;
});
