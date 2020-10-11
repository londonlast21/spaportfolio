import React from 'react';
import { capitalizeFirstLetter } from ".././utils/helpers";

function Nav(props) {
    const {
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected,
        portfolioSelected,
        setPortfolioSelected,
        aboutSelected,
        setAboutSelected
    } = props;

   

    // const categories = [
    //     {
    //         name: "Portfolio"
    //     },
    //     {
    //         name: "Resume"
    //     },
    //     {
    //         name: "Contact"
    //     },
    //     {
    //         name: "About Me"
    //     }
    // ]

    // function categorySelected(name) {
    //     console.log(`${name} clicked`)
    // }


  return (
    <header>
        <h2>
            <a href="/">
                <span role="img">J. L. Cady🌱</span> 
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
                <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
                    <span onClick={() => {
                        setContactSelected(false);
                        setResumeSelected(false);
                        setAboutSelected(true);
                        setPortfolioSelected(false)
                    }}>
                        <h5>About Me</h5>
                    </span>
                </li>

                <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
                    <span onClick={() => {
                        setContactSelected(false);
                        setResumeSelected(false);
                        setAboutSelected(false);
                        setPortfolioSelected(true)
                    }}>
                        <h5>Portfolio</h5>
                    </span>
                </li>

                <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                    <span onClick={() => {
                        setContactSelected(false);
                        setResumeSelected(true);
                        setAboutSelected(false);
                        setPortfolioSelected(false)
                    }}>
                        <h5>Resume</h5>
                    </span>
                </li>
                

        
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick={() => {
                        setContactSelected(true);
                        setResumeSelected(false);
                        setAboutSelected(false);
                        setPortfolioSelected(false)
                    }}>
                        <h5>Contact</h5>
                    </span>
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

                    ))}  */}
            </ul>
        </nav>
    </header>
  );
}

export default Nav;