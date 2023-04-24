import React from 'react';
import { useState } from 'react';
import DownloadAPI from './API/Download'

function Program(props) {
    const [data,setdata]=useState(DownloadAPI)
    // console.log(data);
    return (
        <div>
            <div className="container-fluid">
            
                        {data.map(ele => {
                            
                          console.log(ele.title);
                       
                            return(
                                <>
                                <div className="row main-pro d-flex justify-content-center align-items-center">
                                  
                                   
                                    <div className="col-6">
                                        <div className="provideo">
                                            <img src={ele.img} alt="image" className='img-fluid' />
                                            <video autoPlay playsInline muted loop>
                                                <source  src={ele.video} />
                                            </video>
                                        </div>
                                    </div>
                                    <div className="col-6 px-5">
                                            <h1>{ele.title}</h1>
                                            <h4>{ele.info}</h4>
                                    </div>
                                
                                </div>
                             
                                </>
                            )
                        })}
                    </div>
                </div>
        
    );
}

export default Program;