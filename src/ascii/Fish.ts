import { MovingElement } from "./ElementMoving";

export class Fish extends MovingElement {
  private static readonly FISH_ASCII = ["  __", ">oO)", "(__)"];

  constructor(x: number, y: number) {
    // Set the initial x and y position, and a fixed horizontal speed for the fish.
    super(x, y, 1, 0, 0.1);
  }

  getBoundingBox(): { width: number; height: number } {
    return {
      width: Fish.FISH_ASCII[0].length,
      height: Fish.FISH_ASCII.length,
    };
  }

  render(): string[] {
    // Return the fish's ASCII representation.
    return Fish.FISH_ASCII;
  }
}
