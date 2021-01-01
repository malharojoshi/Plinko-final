class Plingo {
  constructor(x, y) {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.circle(x, y, 10, options);
    World.add(world, this.body);
  }
  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    ellipseMode(RADIUS);
    fill("red");
    ellipse(0, 0, 10);
    pop();
  }
}
