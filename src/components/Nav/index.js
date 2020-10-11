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
            <li className="mx-2">
                    <span onClick={() => props.setPage("About")}>About Me</span>
                </li>

                <li className="mx-2">
                    <span onClick={() => props.setPage("Portfolio")}>Portfolio</span>
                </li>
        
                <li className="mx-2">
                    <span onClick={() => props.setPage("Contact")}>Contact</span>
                </li>

                <li className="mx-2">
                    <span onClick={() => props.setPage("Resume")}>Resume</span>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;