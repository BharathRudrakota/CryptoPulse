import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='container-fluid border p-3 '>
      <div className="row ">
        <div className="col-sm-12 col-md-3 col-lg-3">
        <div className='footer-links '>
             <NavLink className="navbar-brand fw-bold ht fs-3" to=''>Crypto<span className='text-white '>Pulse</span></NavLink>
             <p>&copy;2025 CryptoPulse</p>
             <p className='social-media-links d-flex gap-3'>
               <a href="" className='nav-link fs-2'><i className="bi bi-facebook"></i></a>
               <a href="" className='nav-link fs-2'><i className="bi bi-instagram"></i></a>
               <a href="" className='nav-link fs-2'><i className="bi bi-telegram"></i></a>
               <a href="" className='nav-link fs-2'><i className="bi bi-twitter-x"></i></a>
               <a href="" className='nav-link fs-2'><i className="bi bi-whatsapp"></i></a>
             </p>
             <p>
             <i className="bi bi-globe-americas"></i> Global | English
             </p>
           </div>
        </div>
           
        <div className="col-sm-12 col-md-3 col-lg-3">
        <div className='footer-links'>
             <h3>Company</h3>
             <p>About</p>
             <p>Careers</p>
             <p>Blog</p>
             <p>Contact</p>
             <p>Legal & Privacy</p>
           </div>
        </div>
           
        <div className="col-sm-12 col-md-3 col-lg-3">
        <div className='footer-links'>
             <h3>Developers</h3>
             <p>Developer platform</p>
             <p>Wallets</p>
             <p>Wallets SDK</p>
             <p>Coinbase App</p>
             <p>Exchange API</p>
           </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
        <div className='footer-links'>
             <h3>Support</h3>
             <p>Help center</p>
             <p>Create account</p>
             <p>ID verification</p>
             <p>Payment methods</p>
             <p>Supported crypto</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Footer