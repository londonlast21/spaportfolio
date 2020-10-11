import React from 'react';

function Nav(props) {

  return (
    <header>
        <h2>
            <a href="/">
                <span role="img" className="my-name">J. L. Cady🌱</span> 
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
<<<<<<< HEAD
                <li className="mx-2">
                    <span>About Me</span>
=======
            <li className="nav-item">
                    <span className="option" onClick={() => props.setPage("About")}>About Me</span>
>>>>>>> feature/css-to-master
                </li>

                <li className="nav-item">
                    <span className="option" onClick={() => props.setPage("Portfolio")}>Portfolio</span>
                </li>
        
                <li className="nav-item">
                    <span className="option" onClick={() => props.setPage("Contact")}>Contact</span>
                </li>

                <li className="nav-item">
                    <span className="option" onClick={() => props.setPage("Resume")}>Resume</span>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;