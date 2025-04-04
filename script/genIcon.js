const fs = require('fs');
const path = require('path');
const DATA_PATH = process.cwd();

// Đường dẫn đến thư mục chứa các file icon
const OUTPUT_DIR = path.join(DATA_PATH, '/libs/icon/src/lib');
const INPUT_DIR = path.join(DATA_PATH, '/libs/icon/src/svg');

// Tạo thư mục output nếu chưa tồn tại
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Đọc tất cả các file trong thư mục input
fs.readdir(INPUT_DIR, (err, files) => {
  if (err) {
    console.error('Lỗi khi đọc thư mục:', err);
    return;
  }

  files.forEach((file) => {
    if (file.endsWith('.svg')) {
      const filePath = path.join(INPUT_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');

      // Chuyển đổi nội dung file
      const convertedContent = convertSvgToComponent(content, file);

      // Tạo tên file mới (chuyển từ kebab-case sang PascalCase)
      const componentName =
        'icon' +
        file
          .replace('.svg', '')
          .split('_')[0]
          .split('-')
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join('');

      const outputPath = path.join(OUTPUT_DIR, `${componentName}.tsx`);

      fs.writeFileSync(outputPath, convertedContent);
      console.log(`Đã chuyển đổi: ${file} -> ${componentName}.tsx`);
    }
  });
});

function convertSvgToComponent(content, fileName) {
  // Tìm nội dung bên trong thẻ svg
  const svgContentMatch = content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  if (!svgContentMatch) return content;

  // Lấy các thuộc tính của svg, loại bỏ width và height
  const svgProps = content
    .match(/<svg([^>]*)>/)[1]
    .replace(/\s*width="[^"]*"/, '')
    .replace(/\s*height="[^"]*"/, '')
    .trim();

  // Tạo tên component từ tên file
  const componentName =
    'Icon' +
    fileName
      .replace('.svg', '')
      .split('_')[0]
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');

  // Tạo component mới
  const newComponent = `
  import { IconProps } from '../type';

  
  const ${componentName} = ({
  width = '100%',
  height = '100%',
  color = '#212121',
  style,
  onClick,
  className,
}:IconProps) => {
  return (
    <div onClick={onClick} className={className} style={style}>
      <svg width={width ?? '100%'} height={height ?? '100%'} ${svgProps}>
        ${svgContentMatch[1]}
      </svg>
    </div>
  );
};

export { ${componentName} };
`;

  return newComponent;
}
