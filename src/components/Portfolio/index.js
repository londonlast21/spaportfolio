import React from 'react';
import projectImg1 from '../../assets/portfolio/run-buddy.png';
import projectImg2 from '../../assets/portfolio/transforproj.png';
import projectImg3 from '../../assets/portfolio/password.png';
import projectImg4 from '../../assets/portfolio/quiz.png';
import projectImg5 from '../../assets/portfolio/budgettracker.png';
import projectImg6 from '../../assets/portfolio/screenshot.png';

function Portfolio() {
    return (
        <section id="my-works" className="works">

            <div className="work-grid-wrapper">
                <h2 className="section-title">
                    My Work    
                </h2>
                
                <div>

                    
                    <a href="https://londonlast21.github.io/run-buddy/">
                    <p>
                        Run Buddy
                     </p>
                     <img src={projectImg1} className="my-2" style={{ width: "25%" }} alt="Run-Buddy Application" />
                    </a>

                   
                        <a href="https://limitless-meadow-67694.herokuapp.com/">
                        <p>
                            Trans-Safe Healthcare App
                        </p>
                        <img src={projectImg2} className="my-2" style={{ width: "25%" }} alt="Trans Safe-Healthcare App" />
                        
                        </a>
                    

                    <div>
                        <a href="https://londonlast21.github.io/password/">
                        <p>
                        Password Generator
                        </p>
                        <img src={projectImg3} className="my-2" style={{ width: "25%" }} alt="Password Generator" />
                        </a>
                    </div>

                    <div>
                        <a href="https://londonlast21.github.io/quiz/">
                        <p>
                        Coding Quiz
                        </p>
                        <img src={projectImg4} className="mx-2" style={{ width: "25%" }} alt="Timed Coding Quiz" />
                        </a>
                    </div>

                    <div>
                        <a href="https://protected-falls-61512.herokuapp.com/">
                        <p>
                        Budget Tracker
                        </p>
                        <img src={projectImg5} className="mx-2" style={{ width: "25%" }} alt="On and offline budget tracker app" />
                        </a>
                    </div>

                    <div>
                    
                        <a href="https://londonlast21.github.io/filmskeleton/">
                            <p>
                                Trauma Recovery Board
                            </p>
                            <img src={projectImg6} className="mx-2" style={{ width: "25%" }} alt="Tracking app for mental health recovery" />


                        </a>
                    </div>


                </div>
            </div>
        </section>
    );
}

export default Portfolio;