import BlogList from "components/home/BlogList"
import CTA from "components/home/CTA"
import Features from "components/home/Features"
import Header from "components/home/Header"
import Incentives from "components/home/incentive1"
import LogoCLoud from "components/home/LogoCLoud"
import UseCases from "components/home/UseCases"
import Footer from "components/navigation/footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"
import { useEffect } from "react";
function Home() {
    useEffect(() => {
        
        window.scrollTo(0,0)
    }, []);
    return(
        <Layout>
            <Navbar/>
            <div className="pt-32">
            <Header/>
            <Incentives/>
            <UseCases/>
            <Features/>
            <CTA/>
            <LogoCLoud/>
            <BlogList/>
            </div>
            <Footer/>
        </Layout>
        
        
    )
}

export default Home

