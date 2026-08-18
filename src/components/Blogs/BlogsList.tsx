import { getAllBlogsMeta } from '@/lib/blogs';
import BlogsGrid from './BlogsGrid';

const BlogsList = () => {
  const blogs = getAllBlogsMeta();

  return <BlogsGrid blogs={blogs} />;
};

export default BlogsList;