class CannonBall {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.r = 40;
//crie um corpo circular
this.image = loadimage("./assests/cannon.png")
//carregue a imagem
    World.add(world, this.body);
  }

  shoot() {
    var velocity = p5.Vector.fromAngle(cannon.angle)
  }velocity.mult(20);

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
//mostrar a imagem
    pop();

    }
  }

