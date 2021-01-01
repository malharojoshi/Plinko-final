class Partical {
  constructor(x, y) {
    var options = {
      isStatic: false,
      //restitution: 2,
      friction: 0.5,
      density: 0.3,
    };
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
    this.body = Bodies.circle(x, y, 8, options);
    World.add(world, this.body);
    this.radius = 8;
  }
  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    ellipseMode(RADIUS);
    fill(this.color);
    ellipse(0, 0, this.radius);
    pop();
  }
}
