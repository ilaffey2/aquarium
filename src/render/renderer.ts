export interface Renderer {
  clear(): void;
  draw(x: number, y: number, lines: string[]): void;
  refresh(): void;
}
