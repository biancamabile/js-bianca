function setup() {
    createCanvas(600, 600);
    background("purple");
  }
  
  function draw() {
  
    stroke("white");
    fill("green");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 30, 40);
    }
  }
  