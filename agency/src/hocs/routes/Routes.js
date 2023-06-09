import Error404 from "containers/errors/Error404";
import About from "containers/pages/About";
import Blog from "containers/pages/Blog";
import Careers from "containers/pages/Careers";
import Cases from "containers/pages/Cases";
import Contact from "containers/pages/Contact";
import Home from "containers/pages/Home";
import Services from "containers/pages/Services";
import Category from "containers/pages/Category";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Search from "containers/pages/Search";
import PostDetail from "containers/pages/PostDetail";

function AnimatedRoutes() {
    const location = useLocation()

    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {/* Error Display */}
                <Route path="*" element={<Error404 />} />

                {/* Home Display */}
                <Route path="/" element={<Home />} />
                <Route path="/cases" element={<Cases />} />
                <Route path="/services" element={<Services />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<PostDetail />} />
                <Route path="/category/:slug" element={<Category />} />
                <Route path="/search=/:term" element={<Search />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes