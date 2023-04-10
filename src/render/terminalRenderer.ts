import { Renderer } from "./renderer";
import * as ansi from "ansi-escape-sequences";

export class TerminalRenderer implements Renderer {
  private buffer: string[] = [];

  constructor() {
    process.stdout.write(ansi.cursor.hide);
  }

  clear(): void {
    process.stdout.write(ansi.erase.display());
    this.buffer = [];
  }

  draw(x: number, y: number, lines: string[]): void {
    lines.forEach((line, i) => {
      while (y + i >= this.buffer.length) {
        this.buffer.push(" ".repeat(process.stdout.columns || 80));
      }

      this.buffer[y + i] =
        this.buffer[y + i].slice(0, x) +
        line +
        this.buffer[y + i].slice(x + line.length);

      process.stdout.write(ansi.cursor.position(y + i, x));
      process.stdout.write(line);
    });
  }

  refresh(): void {
    process.stdout.write(ansi.cursor.position(0, 0));
  }
}
