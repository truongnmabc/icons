import fs from "fs";
import path from "path";

const targetDir = path.join(process.cwd(), "src", "lib");

function deleteStoriesFiles(directory) {
  try {
    // Read all files and directories in the current directory
    const items = fs.readdirSync(directory);

    items.forEach((item) => {
      const fullPath = path.join(directory, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Recursively search in subdirectories
        deleteStoriesFiles(fullPath);
      } else if (item.endsWith(".stories.tsx")) {
        // Delete .stories.tsx files
        fs.unlinkSync(fullPath);
        console.log(`Deleted: ${fullPath}`);
      }
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Execute the function starting from the target directory
deleteStoriesFiles(targetDir);
console.log("Successfully cleared all .stories.tsx files");
