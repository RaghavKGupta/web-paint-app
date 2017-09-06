
  var canvas = document.getElementById('draw');
  var cx = canvas.getContext('2d');
  resize(); 

  function resize() {
    cx.canvas.width = window.innerWidth;
    cx.canvas.height = window.innerHeight;
  }

  // add event listeners to specify when functions should be triggered
  window.addEventListener('resize', resize);
  document.addEventListener('mousemove', draw);
  document.addEventListener('mousedown', setPosition);
  document.addEventListener('mouseenter', setPosition);

  // last known position
  var pos = { x: 0, y: 0 };

  // new position from mouse events
  function setPosition(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
  }

  function draw(e) {
    
    if (e.buttons !== 1) return; // if mouse is pressed.....

    var color = document.getElementById('hex').value;

    cx.beginPath(); // begin the drawing path

    cx.lineWidth = 20; // width of line 
    cx.lineCap = 'round'; // rounded end cap
    cx.strokeStyle = color; // hex color of line

    cx.moveTo(pos.x, pos.y); // from position
    setPosition(e);
    cx.lineTo(pos.x, pos.y); // to position

    cx.stroke(); // draw it!

   }