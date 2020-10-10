import React from 'react';
import coverImage from "../../assets/cover/profile.png";

function About() {

    


    return (
        <section className="about-me">

    
            <div className = "about-me-wrapper">

                <h2 className="section-title">
                    About Me
                </h2>

                <div className="about-column-left">
                    <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
                </div>

                <div className="about-column-right">
                    <h3>Jack L. Cady</h3>
                    <p>
                        I'm a full-stack web developer with a background in social media, advocacy work,
                        sociology, and management.
                    <br></br>
                        Location: Madison, WI
                    </p>
                </div>

            </div>

        </section>
       
    );
}

export default About;