const fs = require('fs');

try {
  const buffer = fs.readFileSync('./public/owner/gold_frame.png');
  // Check if it's a PNG
  if (buffer[0] !== 0x89 || buffer[1] !== 0x50 || buffer[2] !== 0x4E || buffer[3] !== 0x47) {
    console.log("Not a PNG");
    process.exit(1);
  }
  
  // PNG color type is at byte 25
  const colorType = buffer[25];
  console.log("Color type:", colorType);
  if (colorType === 6 || colorType === 4) {
    console.log("Image has an alpha channel (transparent).");
  } else {
    console.log("Image does NOT have an alpha channel (opaque).");
  }
} catch(e) {
  console.error(e);
}
