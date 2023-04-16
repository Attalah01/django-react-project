import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import store from "store";
import { Provider } from "react-redux";

import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Cases from "containers/pages/Cases";
import Services from "containers/pages/Services";
import Carrers from "containers/pages/Carrers";
import About from "containers/pages/About";
import Blog from "containers/pages/Blog";
import Contact from "containers/pages/Contact";

function App() {
  return (
    <Provider store={store}>

      <Router>
          <Routes>
            {/* Error Display */}
            <Route path="*" element={<Error404 />} /> 
            
            {/* Home Display */}
            <Route path="/" element={<Home />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/services" element={<Services />} />
            <Route path="/carrers" element={<Carrers />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </Router>

    </Provider>

  );
}

export default App;
