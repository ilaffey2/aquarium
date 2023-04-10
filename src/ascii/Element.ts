export interface Element {
  x: number;
  y: number;
  update(screenWidth?: number, screenHeight?: number): void;
  render(): string[];
}
