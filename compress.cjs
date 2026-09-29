const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public/images');
const files = fs.readdirSync(dir);

(async () => {
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.png')) {
      const filePath = path.join(dir, file);
      const outPath = path.join(dir, file.replace(/\.(jpg|png)$/, '.webp'));
      await sharp(filePath)
        .resize(800, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outPath);
      
      console.log('Compressed:', file);
      // Delete old jpg/png
      fs.unlinkSync(filePath);
    }
  }
})();
