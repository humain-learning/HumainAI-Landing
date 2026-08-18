import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOGS_DIRECTORY = path.join(process.cwd(), 'src/content/blogs');

export type BlogFrontmatter = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  categoryLabel: string;
  coverImage: string;
  authorName: string;
  authorAvatar: string;
  date: string;
};

export const getAllBlogSlugs = (): string[] => {
  return fs
    .readdirSync(BLOGS_DIRECTORY)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
};

export const getAllBlogsMeta = (): BlogFrontmatter[] => {
  return getAllBlogSlugs().map((slug) => {
    const fileContents = fs.readFileSync(path.join(BLOGS_DIRECTORY, `${slug}.md`), 'utf8');
    const { data } = matter(fileContents);
    return data as BlogFrontmatter;
  });
};

export const getBlogBySlug = (
  slug: string
): { frontmatter: BlogFrontmatter; content: string } | null => {
  const filePath = path.join(BLOGS_DIRECTORY, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return { frontmatter: data as BlogFrontmatter, content };
};
