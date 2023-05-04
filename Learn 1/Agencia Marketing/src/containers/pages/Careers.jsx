import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { HelmetProvider, Helmet } from "react-helmet-async"

function Careers(){
    useEffect(() =>{
        window.scrollTo(0, 0)
    },[])
    return (
      <HelmetProvider>
        <Helmet>
          <title>Asuna | Careers</title>
          <meta
            name="description"
            content="Software digital marketing. Web and app services"
          />
          <meta
            name="keywords"
            content="Software agency, digital marketing, creacion de pagina web"
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

        <Layout>
          <Navbar />
          <div className="pt-28">Careers</div>
          <Footer />
        </Layout>
      </HelmetProvider>
    );
}
export default Careers