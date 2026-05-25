import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// Define the root content directory
const contentDirectory = path.join(process.cwd(), "content");

// 1. Get all available slugs (filenames without .md)
export function getSlugs(type: "articles" | "events"): string[] {
  const dirPath = path.join(contentDirectory, type);
  if (!fs.existsSync(dirPath)) return [];
  return fs.readdirSync(dirPath).filter((file) => file.endsWith(".md"));
}

// 2. Fetch a single item by its slug
export function getItemBySlug(slug: string, type: "articles" | "events") {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(contentDirectory, type, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  
  // Use gray-matter to parse the metadata section
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    meta: data,
    content,
  };
}

// 3. Fetch all items of a specific type, sorted by date
export function getAllItems(type: "articles" | "events") {
  const slugs = getSlugs(type);
  const items = slugs
    .map((slug) => getItemBySlug(slug, type))
    .filter((item) => item !== null)
    .sort((a, b) => {
      // Sort in descending order (newest first)
      if (a!.meta.date > b!.meta.date) return -1;
      if (a!.meta.date < b!.meta.date) return 1;
      return 0;
    });
  return items;
}

// 4. Convert markdown string to HTML string
export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
