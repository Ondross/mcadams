// @param[string] query
function get(query){$(query)};

function randomColor()
{
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(
function()
{
  //
  // Run the same code every two seconds!
  //
  get("#id").css('background-color', randomColor());
  console.log(randomColor());
}, 2000);