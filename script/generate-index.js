const fs = require('fs');
const path = require('path');

/**
 * Hàm duyệt thư mục đệ quy, trả về danh sách đường dẫn tới các file .tsx
 * (bỏ qua file có "stories" trong tên)
 */
function getAllTsxFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  for (const fileName of list) {
    const filePath = path.join(dir, fileName);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Tiếp tục đệ quy nếu là thư mục
      results = results.concat(getAllTsxFiles(filePath));
    } else {
      // Chỉ lấy các file .tsx
      // và loại bỏ tên file có chứa 'stories'
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
 * Tạo nội dung import và export cho mỗi file .tsx
 * @param {string[]} filePaths Danh sách các đường dẫn file .tsx
 * @param {string} libDir Đường dẫn tuyệt đối tới thư mục lib
 * @returns {string} Chuỗi nội dung đầy đủ cho file index.ts
 */
function generateIndexContent(filePaths, libDir) {
  // Mảng để chứa các dòng import/export
  const lines = [];

  filePaths.forEach((filePath) => {
    // Lấy tên file không có đuôi .tsx, ví dụ "IconEdit"
    const baseName = path.basename(filePath, '.tsx');

    // Tạo đường dẫn tương đối dạng: "./lib/IconEdit"
    // (Giả sử file index.ts nằm cùng cấp với 'lib')
    // => path.relative: tính từ vị trí index.ts (libDir/..)
    // Nhưng ở đây ta chỉ cần chuỗi "./lib/TenFile" nên có thể làm đơn giản:
    //
    // B1. Lấy phần "lib/..." (VD: "lib/IconEdit.tsx")
    // B2. Bỏ .tsx => "lib/IconEdit"
    // B3. Thêm "./" => "./lib/IconEdit"
    const relPath = filePath
      .replace(libDir, 'lib') // thay đường dẫn tuyệt đối = "lib"
      .replace(/\\/g, '/') // fix cho Windows
      .replace(/\.tsx$/, ''); // bỏ đuôi .tsx

    // Mỗi file tạo 2 dòng: import { baseName } from './lib/IconEdit';
    //                     export { baseName };

    const componentName = baseName.charAt(0).toUpperCase() + baseName.slice(1);
    lines.push(`import { ${componentName} } from './${relPath}';`);
    lines.push(`export { ${componentName} };`);
    lines.push(''); // Dòng trống cho dễ nhìn
  });

  // Kết hợp tất cả thành 1 chuỗi
  return lines.join('\n');
}

/**
 * Hàm chính thực hiện:
 * 1. Lấy các file tsx (không có stories)
 * 2. Sinh nội dung
 * 3. Ghi vào index.ts
 */
function main() {
  // index.ts nằm cùng cấp với 'lib'
  // => Ta lấy đường dẫn tuyệt đối tới thư mục lib
  const libDir = path.join(process.cwd(), 'libs/icon/src/lib');

  // Duyệt lấy tất cả file .tsx
  const tsxFiles = getAllTsxFiles(libDir);

  // Sinh nội dung index.ts
  const indexContent = generateIndexContent(tsxFiles, libDir);

  // Tạo đường dẫn tới file index.ts (nằm cạnh thư mục lib)
  const indexPath = path.join(process.cwd(), 'libs/icon/src/index.ts');

  // Ghi file
  fs.writeFileSync(indexPath, indexContent, 'utf8');
  console.log(`Đã tạo/ghi đè file index.ts tại: ${indexPath}`);
}

main();
