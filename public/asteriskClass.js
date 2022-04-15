class Asterisk {
  constructor(x, y, d, img) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.img = img;
    this.color = 0;
    this.x_speed = random(-2, 2);
    this.y_speed = random(-2, 2);
  }

  move() {
    this.x = this.x + this.x_speed;
    this.y = this.y + this.y_speed;
  }

  show() {
    image(this.img, this.x, this.y, this.d, this.d);
  }
}