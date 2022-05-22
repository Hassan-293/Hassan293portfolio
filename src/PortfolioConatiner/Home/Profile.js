import React from 'react'
import "./Profile.css";
import Typed from 'react-typed'


export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>

                   <div className='colz-icon'>

                    <a href='https://www.facebook.com/hassanraza.aq'>
                        <i className='fa fa-facebook-square'></i>
                    </a>


                    <a href='https://www.youtube.com/channel/UCCDqQdcZnhI5nDrVNNyZ3dw'>
                        <i className='fa fa-youtube-square'></i>
                    </a>

                    <a href='https://twitter.com/HassaRaza12'>
                        <i className='fa fa-twitter-square'></i>
                    </a>
                    </div>

                   
                   <div className='profile-details-name'>
                       <span className='primary-text'> 
                       {" "}
                       Hello, I'm   <span className='highlighted-text'>Hassan Raza</span>
                       
                       </span>
                   </div>
      
                    <div className='Details'>

                    <h1>
                    <Typed
                        strings={[
                            
                            "Frond-End Developer",
                            "React JS Developer",
                            "Machine Learning Engineer"
                        ]}
                            typeSpeed={150}
                            backSpeed={100}
                            loop


                    /> 

</h1>
                    
                   
                   
                   </div> 
 
                    <span className='profile-role-tagline'>
                Knack of building applications with frond end and backend operations.       
                   </span>

                <div className='profile-options'>
                <button className='btn primary-btn'>{""} Hire Me  {""}</button>
                <a href='resume.pdf' download='resume'>
                <button className='btn highlighted-btn'> Get Resume</button>

                </a>
                 </div>
                  
                 </div>
            </div>


           <div className='profile-picture'>

           <div className='profile-picture-background'>

           </div>


           </div>


        </div>
    </div>
  )
}
