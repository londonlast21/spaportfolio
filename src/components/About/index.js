import React from 'react';
import coverImage from "../../assets/cover/profile.png";

function About() {

    


    return (
        <section className="about-me">

    
            <div className = "about-me-wrapper">

                <h2 className="section-title">
                    About Me
                </h2>

                <div className="about-column">
                    <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
                    <div className="about-column-block">
                    <h3>Jack L. Cady</h3>
                    <p>
                        I'm a full-stack web developer with a background in social media, advocacy work,
                        sociology, and management.
                    <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br></br>
                        Location: Madison, WI
                    </p>
                    </div>
                </div>

                <div className="about-column-right">
                    
                </div>

            </div>

        </section>
       
    );
}

export default About;