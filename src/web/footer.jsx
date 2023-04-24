import React from 'react';

function footer(props) {
    return (
      <>
        <div className="container-fluid footer">
            <div className="container pt-5 ">
                <p>Questions? Call 000-800-919-1694</p>
                <div className="row">
                    <div className="col-4">
                        <ul>
                            <li> <a href="#">Faq</a></li>
                            <li>  <a href="#">Account</a></li>
                            <li><a href="#">Job</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li> <a href="#">only on netflix</a></li>
                            <li>
                            <form class="d-flex mt-5">
                            <span className='lan-dp'>
                            <i class="fa-solid fa-globe"></i>
                                <select className='form-select lan'>
                                    <option value="english"> English</option>
                                    <option value="Hindi">Hindi</option>
                                </select>
                                </span>
                                
                            </form>
                            </li>
                            <li className='mt-3'><span >Netflix India</span></li>
                        </ul> 
                      
                    </div>
                    <div className="col-4">
                    <ul>
                            <li> <a href="#">Faq</a></li>
                            <li>  <a href="#">Account</a></li>
                            <li><a href="#">Job</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li> <a href="#">only on netflix</a></li>
                        </ul> 
                    </div>
                    <div className="col-4">
                    <ul>
                            <li> <a href="#">Faq</a></li>
                            <li>  <a href="#">Account</a></li>
                            <li><a href="#">Job</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li> <a href="#">only on netflix</a></li>
                        </ul> 
                    </div>
                </div>
            </div>
        </div>
      </>
    );
}

export default footer;