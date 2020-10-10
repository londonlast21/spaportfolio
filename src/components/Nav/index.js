import React from 'react';

function Nav() {

  return (
    <header>
        <h2>
            <a href="/">
                <span role="img" aria-label="camera">J. L. Cady🌱</span> 
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                    About Me
                    </a>
                </li>
                <li className="mx-2">
                    <span>Portfolio</span>
                </li>
                <li className="mx-2">
                    <span>Contact</span>
                </li>
                <li className="mx-2">
                    <span>Resume</span>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;