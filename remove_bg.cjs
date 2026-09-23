const Jimp = require('jimp');

async function removeBlackBackground() {
  try {
    const image = await Jimp.read('public/hero_logo_original.png');
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // Calculate luminance or just check if it's very dark
      // If RGB are all low, make it transparent
      if (red < 30 && green < 30 && blue < 30) {
        this.bitmap.data[idx + 3] = 0; // Alpha to 0
      } else {
        // We can also make the alpha channel proportional to the lightness so edges are smooth
        // A simple way is to use the max of RGB as the alpha, or luminance
        const max = Math.max(red, green, blue);
        if (max < 255) {
            // map [0, 255] to [0, 255] but smooth the bottom
            // if max is below 150, alpha scales down
            // Actually a better way: keep the color, but set alpha to a mapped luminance
            const luma = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
            // The brighter it is, the more opaque.
            // If luma is very low, it becomes transparent.
            let alpha = Math.min(255, luma * 2.5); 
            this.bitmap.data[idx + 3] = alpha;
        }
      }
    });

    await image.writeAsync('public/hero_logo.png');
    console.log("Logo processed successfully");
  } catch (err) {
    console.error(err);
  }
}

removeBlackBackground();
