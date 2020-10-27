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
                    <p className="tagline">
                        I'm a full-stack web developer with a background in social media, advocacy work,
                        sociology, and management.
                    </p>
                    <p className="about-bio">
                        After graduating with a degree in Social Sciences, I spent time in Los Angeles handling social media for a small production company.  This was followed by working with the Trans community for several years, specializin in surgery outreach.  After working in management positions the last few years, I decided to change fields to web development, graduating in Fall 2020 from a coding bootcamp run out of the University of Wisconsin.
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
