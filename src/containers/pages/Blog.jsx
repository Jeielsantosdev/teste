import Footer from "components/navigation/footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"
import { useEffect } from "react";
function Blog() {
    useEffect(() => { 
        window.scrollTo(0,0)
}, []);
    return(
        
        <Layout>
            <Navbar/>
            <div className="pt-32">
            Blog
           
            </div>
            <Footer/>
        </Layout>
        
        
    )
}

export default Blog

