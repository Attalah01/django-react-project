import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { search_blog, search_blog_page } from "redux/actions/blog/blog";

function Search({
    posts,
    count,
    next,
    previous,
    search_blog,
    search_blog_page,
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
        Search Posts
      </div>
      <Footer />
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  posts: state.blog.filtered_posts,
  count: state.blog.count,
  next: state.blog.next,
  previous: state.blog.previous,
});

export default connect(mapStateToProps, {
  search_blog,
  search_blog_page,
})(Search);
