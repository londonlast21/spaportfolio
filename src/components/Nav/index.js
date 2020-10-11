import React from 'react';

function Nav() {

    // const categories = [
    //     {
    //         name: "Portfolio",
    //         description: "Check out some of my work"
    //     },
    //     {
    //         name: "Resume",
    //         description: "Current resume"
    //     }
    // ]

    // function categorySelected(name) {
    //     console.log(`${name} clicked`)
    // }


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
                    <span>About Me</span>
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

                    {/* {categories.map((category) => (
                        <li 
                            className="mx-1"
                            key={category.name}
                            >
                                <span onClick={() => categorySelected(category.name)} >
                                    {category.name}
                                </span>
                            </li>

                    ))} */}
            </ul>
        </nav>
    </header>
  );
}

export default Nav;