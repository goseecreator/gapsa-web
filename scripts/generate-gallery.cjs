const fs = require("fs");
const path = require("path");

const folder = path.join(__dirname, "../public/images/peaceTour2025");

const files = fs
  .readdirSync(folder)
  .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

const output = files.map(f => `"/images/peaceTour2025/${f}"`);

console.log("gallery: [\n  " + output.join(",\n  ") + "\n]");
