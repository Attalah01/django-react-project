import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Carrers(){
    return(
        <Layout>
            <Navbar />
            <div className='pt-28'>
                Carrers 
            </div>
            <Footer />
        </Layout>
    )
}
export default Carrers