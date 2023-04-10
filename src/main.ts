import { AsciiAquarium } from "./ascii/Aquarium";
import { BrowserRenderer } from "./render/browserRenderer";
import { Renderer } from "./render/renderer";
import { TerminalRenderer } from "./render/terminalRenderer";

let renderer: Renderer;

if (typeof window !== "undefined") {
  // Running in the browser
  renderer = new BrowserRenderer();
} else {
  // Running in the terminal
  renderer = new TerminalRenderer();
}

const aquarium = new AsciiAquarium(renderer);
aquarium.start();
