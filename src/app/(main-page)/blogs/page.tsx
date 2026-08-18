import FeaturedBlogHero from 'components/Blogs/FeaturedBlogHero';
import BlogsList from 'components/Blogs/BlogsList';
import BlogsCtaFooter from '@/components/Blogs/BlogsCtaFooter';

const BlogsPage = () => {
  return (
    <>
      <FeaturedBlogHero />
      <BlogsList />
      <BlogsCtaFooter />
    </>
  ); 
};

export default BlogsPage;
