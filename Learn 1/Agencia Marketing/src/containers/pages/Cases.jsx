import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Header from "components/cases/Header"
import CaseList from "components/cases/CaseList"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"

function Cases(){
    useEffect(() =>{
        window.scrollTo(0, 0)
    },[])
    return(
        <Layout>
            <Navbar />
            <div className='pt-28'>
                <Header /> 
                <CaseList />
            </div>
            <Footer />
        </Layout>
    )
}
export default Cases