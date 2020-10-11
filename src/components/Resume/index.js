import React from 'react';

function Resume() {
    return (
        <section className="my-5">
            <h1>Resume</h1>

            <div>
                <h3>Downloadable Resume</h3>
                <a className="resume-link" href="https://docs.google.com/document/d/e/2PACX-1vQS-TAscI5tSYVxJazsXF4MwBhYCLSAkElSvhD5hx3FwBv-TWrG2kAUpZzd6iST9JW1k5weuP-VdvK-/pub">
                    LINK
                </a> 
                 
            </div>

            <div>
                
                <h3>Proficiencies</h3>
                <ul className="resume-list">
                   
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        jQuery
                    </li>
                    <li>
                        AJAX
                    </li>
                    <li>
                        Node.JS
                    </li>
                    <li>
                        Express.JS
                    </li>
                    <li>
                        MySQL
                    </li>
                    <li>
                        Sequelize
                    </li>
                </ul>
                <ul className="resume-list">
                    <h5>Experience With:</h5>
                    <li>
                        MVC
                    </li>
                    <li>
                        OOP
                    </li>
                    <li>
                        Responsive Design
                    </li>

                </ul>
            </div>
        </section>
    )
}


export default Resume;