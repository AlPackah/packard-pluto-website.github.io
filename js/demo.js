/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#29435b',
    lineWidth: 0,
    lineColor: '#192530',
    maxSpeedX: 0.3,
    maxSpeedY: 0.3,
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});