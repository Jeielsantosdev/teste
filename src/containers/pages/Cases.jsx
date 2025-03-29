import CasesList from "components/cases/CasesList"
import Header from "components/cases/Header"
import Footer from "components/navigation/footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"
import { useEffect } from "react";
function Cases() {
    useEffect(() => { 
        window.scrollTo(0,0)
}, []);
    return(
        <Layout>
            <Navbar/>
            <div className="pt-32">
            <Header/>
            <CasesList/>
           
            </div>
            <Footer/>
        </Layout>
        
        
    )
}

export default Cases

