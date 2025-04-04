const fs = require('fs');
const path = require('path');

/**
 * Đệ quy lấy tất cả file .tsx (bỏ qua file tên chứa 'stories')
 */
function getAllTsxFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  for (const fileName of list) {
    const filePath = path.join(dir, fileName);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // nếu là thư mục, tiếp tục đệ quy
      results = results.concat(getAllTsxFiles(filePath));
    } else {
      // kiểm tra đuôi .tsx + không chứa 'stories'
      if (
        fileName.endsWith('.tsx') &&
        !fileName.toLowerCase().includes('stories')
      ) {
        results.push(filePath);
      }
    }
  }

  return results;
}

/**
 * Sinh nội dung cho file list-icon.ts:
 *  - import tất cả icon
 *  - tạo mảng listIcon = [{ name: 'IconEdit', component: <IconEdit /> }, ...]
 *  - export default listIcon
 */
function generateListIconContent(filePaths, libDir) {
  const lines = [];

  // Import từng icon
  filePaths.forEach((filePath) => {
    // Lấy tên file không có .tsx, ví dụ "iconEdit"
    const baseName = path.basename(filePath, '.tsx');

    // Viết hoa chữ cái đầu => "IconEdit"
    const componentName = baseName.charAt(0).toUpperCase() + baseName.slice(1);

    // Tạo đường dẫn tương đối, ví dụ "./lib/IconEdit"
    const relativePath = filePath
      .replace(libDir, 'lib') // thay thế đường dẫn tuyệt đối bằng "lib"
      .replace(/\\/g, '/') // fix cho Windows
      .replace(/\.tsx$/, ''); // bỏ đuôi .tsx

    lines.push(`import { ${componentName} } from './${relativePath}';`);
  });

  // Tạo mảng listIcon dưới dạng [{ name, component }, ...]
  lines.push('');
  lines.push('const listIcon = [');
  filePaths.forEach((filePath) => {
    const baseName = path.basename(filePath, '.tsx');
    const componentName = baseName.charAt(0).toUpperCase() + baseName.slice(1);

    lines.push(`  { name: '${componentName}', component: ${componentName}  },`);
  });
  lines.push('];');
  lines.push('');
  lines.push('export default listIcon;');

  return lines.join('\n');
}

function main() {
  // Thư mục chứa các file icon .tsx
  const libDir = path.join(process.cwd(), 'libs/icon/src/lib');

  // Tìm tất cả file .tsx (không chứa 'stories')
  const tsxFiles = getAllTsxFiles(libDir);

  // Sinh nội dung
  const content = generateListIconContent(tsxFiles, libDir);

  // File đầu ra
  const outputPath = path.join(process.cwd(), 'libs/icon/src/list-icon.ts');

  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`Đã tạo file: ${outputPath}`);
}

main();
