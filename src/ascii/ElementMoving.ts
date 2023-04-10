import { Renderer } from "../render/renderer";

export abstract class Element {
  abstract getBoundingBox(): { width: number; height: number };
  abstract render(): string[];
}

export abstract class MovingElement extends Element {
  x: number;
  y: number;
  vx: number;
  vy: number;
  turnAroundProbability: number;
  isAlive: boolean = true;

  constructor(
    x: number,
    y: number,
    vx: number,
    vy: number,
    turnAroundProbability: number = 0
  ) {
    super();
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.turnAroundProbability = turnAroundProbability;
  }

  update(screenWidth: number, screenHeight: number): void {
    this.x += this.vx;
    this.y += this.vy;

    if (
      this.x < 0 ||
      this.y < 0 ||
      this.x + this.getBoundingBox().width > screenWidth ||
      this.y + this.getBoundingBox().height > screenHeight
    ) {
      const shouldTurnAround = Math.random() < this.turnAroundProbability;
      if (shouldTurnAround) {
        this.vx = -this.vx;
        this.vy = -this.vy;
      } else {
        this.isAlive = false;
      }
    }
  }
}
