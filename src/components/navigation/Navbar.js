import { connect } from "react-redux";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import React,{ useState } from "react";
import { NavLink,Link } from "react-router-dom";
//import {loading_dots} from 'assets/img/loading-dots.gif'
import logo_boomalag from 'assets/img/boomslag-black.png'
import { DotLoader } from "react-spinners";
function Navbar(){

    const [loading,setLoading]=useState(true)
    window.onscroll = function(){scrollFunction()}

    function scrollFunction(){
        if(document.getElementById('navbar')){
            if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white');
            }
        }
    }

    return (
        <nav id='navbar' className="w-full py-4 top-0 transition duration-300 ease-in-out z-40 fixed" >
            <div className=" px-4 sm:px-6">
              <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                
                 <Link to='/' className="ml-4 mt-2" >
                 <img src={logo_boomalag}
                    width={140}
                    height={120}
                    alt="" 
                    className=""/>
                 </Link>
                
                <div className="ml-4 mt-2 flex-shrink-0">
                    <NavLink to='/casos' className="text-lg inline-flex  font-medium leading-6 text-gray-900   hover:underline-offset-4 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Casos</NavLink>
                    <NavLink to='/services' className="text-lg inline-flex  font-medium leading-6 text-gray-900  hover:underline-offset-4 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Services</NavLink>
                    <NavLink to='/about' className="text-lg inline-flex  font-medium leading-6 text-gray-900  hover:underline-offset-4 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Nosotros</NavLink>
                    <NavLink to='/carreras' className="text-lg inline-flex  font-medium leading-6 text-gray-900  hover:underline-offset-4 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Carreras</NavLink>
                    <NavLink to='/blog' className="text-lg inline-flex  font-medium leading-6 text-gray-900  hover:underline-offset-4 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Blog</NavLink>
                    <NavLink to='/contacto' className="text-lg inline-flex  font-medium leading-6 text-gray-900  hover:underline-offset-4 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Contacto</NavLink>
                
                  <Link to="/contacto"className="inline-flex ml-12 items-center rounded-md border border-transparent bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                        Hire us
                   
                    <DotLoader className='ml-3 -mr1 h-5 w-5' loading={loading}size={20} color="#f2f2f2" />
                </Link>
                </div>
              </div>
            </div>
        </nav>
    )
}

const mapStateToProp=state=>({

})

export default connect(mapStateToProp,{}) (Navbar)