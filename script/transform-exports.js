const fs = require('fs');
const path = require('path');

/**
 * Lấy tất cả file .stories.tsx trong thư mục, kể cả đệ quy
 */
function getAllStoriesTsxFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  for (const fileName of list) {
    const filePath = path.join(dir, fileName);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results = results.concat(getAllStoriesTsxFiles(filePath));
    } else {
      if (fileName.endsWith('.stories.tsx')) {
        results.push(filePath);
      }
    }
  }

  return results;
}

/**
 * Hàm tiện ích chuyển "iconTire" -> "IconTire".
 * Nếu có các dấu gạch nối hoặc gạch dưới, nó sẽ chuyển tất cả thành PascalCase.
 * Ví dụ: 'my-icon-tire' -> 'MyIconTire'
 */
function toPascalCase(str) {
  return str
    .split(/-|_/g)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Sinh nội dung story mẫu theo tên file gốc và tên component
 * @param {string} baseName tên file gốc (không kể .stories.tsx)
 * @param {string} componentName tên component PascalCase
 */
function createStoryContent(baseName, componentName) {
  return `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${baseName}';

const meta: Meta<typeof ${componentName}> = {
  component: ${componentName},
  title: '${componentName}',
  argTypes: {
    onClick: { action: 'onClick executed!' },
  },
};
export default meta;

type Story = StoryObj<typeof ${componentName}>;

export const Primary: Story = {
  args: {
    color: '#ddd',
    width: 24,
    height: 24,
  },
  render: (args) => <${componentName} {...args} />,
};
`;
}

/**
 * Hàm chính: sinh lại nội dung cho tất cả .stories.tsx theo mẫu
 */
function main() {
  const dir = path.join(process.cwd(), 'libs/icon/src/lib'); // đường dẫn chứa các file stories
  const storiesFiles = getAllStoriesTsxFiles(dir);

  storiesFiles.forEach((filePath) => {
    // Lấy tên file gốc (vd: "iconTire" từ "iconTire.stories.tsx")
    const fileName = path.basename(filePath, '.stories.tsx');
    // Chuyển sang PascalCase để đặt cho component (vd: "IconTire")
    const componentName = toPascalCase(fileName);

    // Tạo nội dung mới
    const newContent = createStoryContent(fileName, componentName);

    // Ghi đè lại file
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated story file: ${filePath}`);
  });
}

main();
