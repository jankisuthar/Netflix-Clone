import React from 'react';
import {
   Link
   } from "react-router-dom";
import { useEffect } from 'react';
import Program from './02program'
import DownloadAPI from './03DownloadAPI'
import Questions from './04Questions'
import Footer from './footer'
function Header(props) {
    useEffect(()=>{
        setTimeout(() => {
            console.log("useeffect called");
        }, 2000);
    })
    return (
        <>
       
           <header>
                <section className='header-section container-fluid'>
                    <nav class="navbar navbar-expand-sm navbar-dark container">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="javascript:void(0)">
                                <img src="image/logo.png" alt="logo" className='img-fluid logo' />
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="mynavbar">
                            <ul class="navbar-nav me-auto">
                                
                            </ul>
                            <form class="d-flex">
                            <span className='lan-dp'>
                            <i class="fa-solid fa-globe"></i>
                                <select className='form-select lan'>
                                    <option value="english"> English</option>
                                    <option value="Hindi">Hindi</option>
                                </select>
                                </span>
                                {/* <button class="btn signin" type="button">SignIn</button> */}
                                <Link className="btn signin" to="/signin">Signin</Link>
                            </form>
                            </div>
                        </div>
            </nav>

            <div className="header-content text-center text-white ">
                <h1 className=''>Unlimited movies, TV shows and
                <br />
                 more.</h1>
                 <h3 className='mt-3'>Watch anywhere. Cancel anytime.</h3>
                 <h4 className='mt-3'>Ready to watch? Enter your email to create or restart your membership.</h4>
                 <form class="d-flex mt-5 get-search">
                    <input class="form-control me-2 search-input" type="text" placeholder="Search"/>
                    <button class="btn signin get" type="button">Get Started</button>
                </form>
            </div>
        </section>

        <div className="bg">
       
       </div>
    </header>
  
    <Program/>
    <div className="bg">
       
       </div>
    <DownloadAPI/>
    <div className="bg">
       
       </div>
    <Questions/>
    <div className="bg">
       
       </div>
       <Footer/>    
    </>
    );
}

export default Header;