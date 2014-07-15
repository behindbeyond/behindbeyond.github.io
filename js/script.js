// inner variables
var canvas, ctx;
var image;
var sounds = []; // sounds
var lastColor = 'rgba(255, 128, 0, 0.5)';

/*var bleep = new Audio();
bleep.src = 'media/button-0.wav';*/

var sound = new Howl({
  urls: ['media/metal_sound.wav', 'media/metal_sound.ogg', 'media/metal_sounds.mp3'],
  volume: 1
}).play();

/*var sound = new Howl({
  urls: ['media/button-0.wav']
  autoplay: false,
  volume: 1
  }
}).play();*/


// -------------------------------------------------------------

// draw functions :
function clear() { // clear canvas function
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function drawScene() { // main drawScene function
    clear(); // clear canvas
    ctx.drawImage(image, 0, 0);

    ctx.fillStyle = lastColor;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
// -------------------------------------------------------------

// initialization
$(function(){
    canvas = document.getElementById('scene');
    ctx = canvas.getContext('2d');

    var width = canvas.width;
    var height = canvas.height;

    // load background image
   
    image = new Image();
    image.src = 'images/gray3.jpg';
    image.onload = function() {
    }
    image.onerror = function() {
        console.log('Error loading the background image.');
    }

    // sounds
    /*sounds[0] = new Audio('media/button-0.wav');
    sounds[0].volume = 1; */
   

    // click alerts
    $('#but1').click(function () {  
      $('.dialog').removeClass('dialogVisible');
      $('#dialog2').addClass('dialogVisible');
    });
    $('#but2').click(function () {
      $('.dialog').removeClass('dialogVisible');
      $('#dialog3').addClass('dialogVisible');
    });
    $('#but3').click(function () {
      $('.dialog').removeClass('dialogVisible');
      $('#dialog1').addClass('dialogVisible');
    });
    $('#but_close').click(function () {  
      $('#controls').addClass('controlsPanel');
      $('.bar').addClass('barVisible');
    });
    $('#options').click(function () {  
      $('#controls').removeClass('controlsPanel');
      $('.bar').removeClass('barVisible');
      $('.dialog').removeClass('dialogVisible');
      $('#dialog1').addClass('dialogVisible');
    });
/*
    $(window).keydown(function(event){ // keyboard alerts
        switch (event.keyCode) {
            case 48: // '0' key
                sounds[0].currentTime = 0;
                sounds[0].play(); // play sound #1
                lastColor = 'rgba(0, 128, 155, 0.5)';
                break;
           
        }
    });
*/
    setInterval(drawScene, 200); // loop drawScene
});