const fs = require('fs');
const path = require('path');
const distDir = process.cwd();
const baseDir = path.resolve(distDir, 'libs/icon/src/lib');

fs.readdirSync(baseDir).forEach((file) => {
  const filePath = path.join(baseDir, file);

  if (
    fs.statSync(filePath).isFile() &&
    path.extname(file) === '.tsx' &&
    !file.endsWith('.stories.tsx')
  ) {
    const fileNameWithoutExt = path.basename(file, '.tsx');

    const newDir = path.join(baseDir, fileNameWithoutExt);

    if (!fs.existsSync(newDir)) {
      fs.mkdirSync(newDir);
    }
    const newJsPath = path.join(newDir, 'index.tsx');
    fs.renameSync(filePath, newJsPath);

    const storiesFile = `${fileNameWithoutExt}.stories.tsx`;
    const storiesPath = path.join(baseDir, storiesFile);

    if (fs.existsSync(storiesPath)) {
      const newStoriesPath = path.join(newDir, storiesFile);
      fs.renameSync(storiesPath, newStoriesPath);
      console.log(
        `📖 Moved ${storiesFile} → ${fileNameWithoutExt}/${storiesFile}`
      );
    }
  }
});
