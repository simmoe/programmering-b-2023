let pageHeader, htmlPageheader
let showRedCircle = true

function setup() {
  createCanvas(windowWidth, windowHeight)
  pageHeader = createElement('h1', 'Overskrift med createElement')
  pageHeader.position(100, 100)
  htmlPageheader = select('#htmlPageHeader')
    .html('Nu har p5 overtaget overskriften')
    .position(100, 200)
    .mouseClicked( () => showRedCircle = !showRedCircle )
}


function draw() {
  background(220)
  if(showRedCircle){
    fill('red')
    ellipse(100, 100, 100)  
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}