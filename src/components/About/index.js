import React from 'react';
import coverImage from "../../assets/cover/profile.png";

function About() {

    


    return (
        <section className="about-me">

    
            <div className = "about-me-wrapper">

                <h1 className="about-title">
                    About Me
                </h1>

                <div className="about-column">
                    <img src={coverImage} className="bio-pic" style={{ width: "25%" }} alt="cover" />
                    <div className="about-column-block">
                    <h3 className="me-name">Jack L. Cady</h3>
                    <p className="about-bio">
                        I'm a full-stack web developer with a background in social media, advocacy work,
                        sociology, and management.
                    </p>
                    <p className="about-bio">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="about-bio">
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