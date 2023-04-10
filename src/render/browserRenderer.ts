import { Renderer } from "./renderer";

export class BrowserRenderer implements Renderer {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement("pre");
    document.body.appendChild(this.container);
    this.container.style.fontFamily = "monospace";
    this.container.style.whiteSpace = "pre";
  }

  clear(): void {
    this.container.textContent = "";
  }

  draw(x: number, y: number, lines: string[]): void {
    const existingLine = this.container.childNodes[y] as HTMLElement;

    if (existingLine) {
      const updatedLine =
        (existingLine.textContent || "").slice(0, x) +
        lines[0] +
        (existingLine.textContent || "").slice(x + lines[0].length);
      existingLine.textContent = updatedLine;
    } else {
      const newLine = document.createElement("div");
      newLine.textContent = lines[0];
      this.container.appendChild(newLine);
    }
  }

  refresh(): void {
    // No-op for the browser renderer
  }
}
