import Error404 from "containers/errors/Error404";
import Dashboard from "containers/pages/Dashboard";
import Home from "containers/pages/Home";
import Blog from "containers/pages/blog/Blog";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/* Error Display */}
        <Route path="*" element={<Error404 />} />

        {/* Home Display */}
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;