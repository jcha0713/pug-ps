let asterisks = []
let asteriskImg

function preload() {
  asteriskImg = loadImage('/img/asterisk.png')
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
  let size = random(15, 30)
  for (let i = 0; i < size; i++) {
    let x = random(width)
    let y = random(height)
    let d = random(15, 40)
    let a = new Asterisk(x, y, d, asteriskImg)
    asterisks.push(a)
  }
}

function keyPressed() {
  if (keyCode === 32) {
    asterisks.length = 0
  }
}

function mouseDragged() {
  let x = mouseX
  let y = mouseY
  let d = random(5)
  asterisks.push(new Asterisk(x, y, d, asteriskImg))
}

function touchMoved() {
  let x = mouseX
  let y = mouseY
  let d = random(5)
  asterisks.push(new Asterisk(x, y, d, asteriskImg))
}

function draw() {
  clear()
  canvas.resize(windowWidth, windowHeight)
  for (asterisk of asterisks) {
    asterisk.move()
    asterisk.show()
  }
}
