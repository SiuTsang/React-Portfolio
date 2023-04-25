import React from "react";
import ProfilePic from "";
import Resume from ""

function AboutMe() {
    return (
        <div classname="container" id="content">            
            <div classname="row">                
                <div classname="col">
                    <h1>About Me</h1>
                </div>
            </div>
            
            <div classname="row">
                <div classname="col">                    
                    <img src={ProfilePic} classname="rounded float-left" id="aboutme-img" alt="Profile Pic"/>      

                    <p>Hello, my name Siu Ho Tsang. I am taking a coding bootcamp. I made this website by using React.js framwork. </p>
                    <p>I am engineer graduate in the field of electronic product testing and certification with an emphasis on product safety problem. </p>
                    <p>Please take a look around and let me know what you think by using the form on the contact page.</p>
                    <p>Phone Number: 215-268-4062</p>
                    <p>Email: royshtsang@gmail.com</p>
                    <p><a href={Resume}>View my Resume Here</a></p>
                </div>
            </div>
        </div>
    );

};

export default AboutMe;