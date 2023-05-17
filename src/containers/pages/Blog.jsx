import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { connect } from "react-redux";
import { get_categories } from "redux/actions/categories/categories";
import { get_blog_list, get_blog_list_page } from "redux/actions/blog/blog";
import CategoriesHeader from "components/blog/CategoriesHeader";

function Blog({
  get_categories,
  categories,
  get_blog_list,
  get_blog_list_page,
  posts,
  count,
  next,
  previous,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    get_categories();
    get_blog_list();
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
      </div>
      <Footer />
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  posts: state.blog.blog_list,
  count: state.blog.count,
  next: state.blog.next,
  previous: state.blog.previous,
});

export default connect(mapStateToProps, {
  get_categories,
  get_blog_list,
  get_blog_list_page,
})(Blog);
