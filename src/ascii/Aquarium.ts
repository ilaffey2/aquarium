import { Element } from "./Element";
import { Renderer } from "../render/renderer";
import { Fish } from "./Fish";
import { Decoration } from "./Decoration";
import { MovingElement } from "./ElementMoving";

export class AsciiAquarium {
  private elements: Element[] = [];
  private running = false;

  constructor(private renderer: Renderer) {}

  start(): void {
    this.running = true;
    this.runSimulation();
  }

  stop(): void {
    this.running = false;
  }

  private runSimulation(): void {
    this.populate();

    const loop = () => {
      if (!this.running) return;

      // Remove dead fish from the elements array
      this.elements = this.elements.filter((element) => {
        return !(element instanceof MovingElement) || element.isAlive;
      });

      this.elements.forEach((element) => {
        if (element instanceof MovingElement) {
          const screenWidth = process.stdout.columns || 80;
          const screenHeight = process.stdout.rows || 24;
          element.update(screenWidth, screenHeight);
        }
      });

      this.renderer.refresh();
      this.render();
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(loop);
      } else {
        setTimeout(loop, 100);
      }
    };

    loop();
  }

  private populate(): void {
    // Add initial fish and decorations
    this.elements.push(new Fish(10, 5));
    this.elements.push(new Decoration(5, 8));
  }

  private render(): void {
    this.renderer.clear();

    this.elements.forEach((element) => {
      const lines = element.render();
      this.renderer.draw(element.x, element.y, lines);
    });

    this.renderer.refresh();
  }

  // Add methods for adding, removing, and swapping elements as needed
}
