$(document).ready(function() {
  $cells = $('div').first().children();

  var colorOpt = {'x' : 'blue', 'o' : 'red'};
  var color = colorOpt[window.myGame.player];
  console.log(color);

  $cells.hover(
    function(){
      $(this).addClass(color);
    },
    function(){
      $(this).removeClass(color);
    }
  );

  $cells.click(function() {
    var $cell = $(this)
    var coord = $cell.attr('id');
    // console.log(coord);
    window.myGame.turn(coord, function(mark) {
      $cell.html(mark);
    });
  });

});