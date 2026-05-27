import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { ArticleMeta } from "@/types";

// tells Next.js all possible slugs at build time
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "content/articles"));
  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

// reads the md file and returns the article
async function getArticle(slug: string) {
  const filePath = path.join(process.cwd(), "content/articles", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return {
    meta: data as ArticleMeta,
    content,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { meta, content } = await getArticle(params.slug);

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">

      {/* Cover Image */}
      {meta.coverImage && (
        <Image
          src={meta.coverImage}
          alt={meta.title}
          width={1200}
          height={600}
          className="w-full rounded-xl mb-6 object-cover"
        />
      )}

      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">{meta.title}</h1>

      {/* Meta info */}
      <div className="text-gray-500 text-sm mb-6 flex gap-4">
        <span>{meta.date}</span>
        {meta.author && <span>By {meta.author}</span>}
      </div>

      {/* Tags */}
      {meta.tags && (
        <div className="flex gap-2 mb-8">
          {meta.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        <MDXRemote source={content} />
      </article>

    </main>
  );
}