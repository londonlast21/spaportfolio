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
                <h1 className="work-grid-title">
                    My Work    
                </h1>
                
                <div className="work-grid">
                    
                

                    <div className="work-grid-item">
                    <a href="https://londonlast21.github.io/run-buddy/">
                    <p className="project-title">
                        Run Buddy
                     </p>
                     <img src={projectImg1} className="work-img" style={{ width: "100%" }} alt="Run-Buddy Application" />
                    </a>
                    <a className="link-port" href="https://github.com/londonlast21/run-buddy">GitHub Repo</a>
                    </div>

                    <div className="work-grid-item">
                        <a href="https://limitless-meadow-67694.herokuapp.com/">
                        <p className="project-title">
                            Trans-Safe Healthcare App
                        </p>
                        <img src={projectImg2} className="my-2" style={{ width: "100%" }} alt="Trans Safe-Healthcare App" />
                        
                        </a>
                        <a className="link-port" href="https://github.com/londonlast21/project2">GitHub Repo</a>
                    </div>
                    

                    <div className="work-grid-item">
                        <a href="https://londonlast21.github.io/password/">
                        <p className= "project-title">
                        Password Generator
                        </p>
                        <img src={projectImg3} className="my-2" style={{ width: "100%" }} alt="Password Generator" />
                        </a>
                        <a className="link-port" href="https://github.com/londonlast21/password">GitHub Repo</a>

                    </div>

                    

                    
                    <div className="work-grid-item">
                        <a href="https://londonlast21.github.io/quiz/">
                        <p className="project-title">
                        Coding Quiz
                        </p>
                        <img src={projectImg4} className="mx-2" style={{ width: "100%" }} alt="Timed Coding Quiz" />
                        </a>
                        <a className="link-port" href="https://github.com/londonlast21/quiz">GitHub Repo</a>
                    </div>

                    <div className="work-grid-item">
                        <a href="https://protected-falls-61512.herokuapp.com/">
                        <p className="project-title">
                        Budget Tracker
                        </p>
                        <img src={projectImg5} className="mx-2" style={{ width: "100%" }} alt="On and offline budget tracker app" />
                        </a>
                        <a className="link-port" href="https://github.com/londonlast21/budgetapp">GitHub Repo</a>
                    </div>

                    <div className="work-grid-item">
                    
                        <a href="https://protected-bayou-57861.herokuapp.com/">
                            <p className="project-title">
                                Trans MERN App: V2.0
                            </p>
                            <img src={projectImg6} className="mx-2" style={{ width: "100%" }} alt="Tracking app for mental health recovery" />
                        </a>
                        <a className="link-port" href="https://github.com/londonlast21/safeT">GitHub Repo</a>
                    </div>

                    </div>


                </div>
            
        </section>
    );
}

export default Portfolio;