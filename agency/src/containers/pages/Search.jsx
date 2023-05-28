import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { get_categories } from "redux/actions/categories/categories";
import { connect } from "react-redux";
import {
  get_blog_list,
  get_blog_list_page,
  search_blog,
  search_blog_page,
} from "redux/actions/blog/blog";
import CategoriesHeader from "components/blog/CategoriesHeader";
import { useParams } from "react-router-dom";
import BlogList from "components/blog/search/BlogList";

function Search({
  get_categories,
  categories,
  search_blog,
  search_blog_page,
  posts,
  count,
  next,
  previous,
}) {
  const params = useParams();
  const term = params.term;

  useEffect(() => {
    window.scrollTo(0, 0);
    search_blog(term);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Asuna | Blog</title>
        <meta
          name="description"
          content="Software digital marketing. Web and app services"
        />
        <meta
          name="keywords"
          content="Software agency, digital marketing, web creation"
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://www.rcdev.com/" />
        <meta name="author" content="Asuna" />
        <meta name="publisher" content="Asuna" />

        {/* Social Media Tags */}
        <meta property="og:title" content="Asuna | Software Agency" />
        <meta
          property="og:description"
          content="Software digital marketing. Web and app services"
        />
        <meta property="og:url" content="https://www.rcdev.com/" />
        <meta
          property="og:image"
          content="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        />

        <meta name="twitter:title" content="Asuna | Software Agency" />
        <meta
          name="twitter:description"
          content="Software digital marketing. Web and app services"
        />
        <meta
          name="twitter:image"
          content="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />
      <div className="pt-24">
        <CategoriesHeader categories={categories && categories} />
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
          <div className="mx-auto max-w-full my-10">
            {/* Content goes here */}
            <BlogList
              posts={posts && posts}
              get_blog_list_page={search_blog_page}
              term={term}
              count={count && count}
            />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  posts: state.blog.filtered_posts,
  count: state.blog.count,
  next: state.blog.next,
  previous: state.blog.previous,
});

export default connect(mapStateToProps, {
  get_categories,
  search_blog,
  search_blog_page,
})(Search);
