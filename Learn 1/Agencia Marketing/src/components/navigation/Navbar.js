import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import logo from 'assets/img/logo512.png'
import { useState } from 'react';


function Navbar() {

    const [loading,setLoading] = useState(true)

    window.onscroll = function() {scrollFunction()}

    function scrollFunction() {
      if(document.getElementById('navbar')) {
        console.log((document.body.scrollTop))
      }
    }

    return(
      <nav id='navbar' className='w-full py-4 top-0 z-40 fixed'>
          <div className="px-4 sm:px-6">
              <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                  <Link to='/' className="ml-4 mt-2">
                    <img src={logo} width={100} height={90} className="" />
                  </Link>
                  <div className="ml-4 mt-2 flex-shrink-0">
                    <NavLink to='/cases' className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 border-b-2 border-transparent hover:border-indigo-500">Cases</NavLink>
                    <NavLink to='/services' className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 border-b-2 border-transparent hover:border-indigo-500">Services</NavLink>
                    <NavLink to='/carrers' className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 border-b-2 border-transparent hover:border-indigo-500">Carrers</NavLink>
                    <NavLink to='/about' className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 border-b-2 border-transparent hover:border-indigo-500">About Us</NavLink>
                    <NavLink to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 border-b-2 border-transparent hover:border-indigo-500">Blog</NavLink>
                    <NavLink to='/contact' className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 border-b-2 border-transparent hover:border-indigo-500">Contact</NavLink>
                    <Link to='/contact'
                      className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 text-md font-bold text-white shadow-sm hover:bg-black transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Hire Us
                    </Link>
                  </div>
              </div>
          </div>
      </nav>
    )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps, {

}) (Navbar);