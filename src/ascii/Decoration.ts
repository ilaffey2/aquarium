import { Element } from "./Element";

export class Decoration implements Element {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  update(): void {
    // Update the decoration's position, e.g., animate the decoration
  }

  render(): string[] {
    // Return an array of strings representing the decoration
    return ["~~~~"];
  }
}
