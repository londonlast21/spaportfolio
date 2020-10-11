import React, { useState } from 'react';


function Nav() {
const [currentCategory, setCurrentCategory] = useState(categories[0]);
const [categories] = useState([
    {
        name: 'About Me',
    },
    {
        name: 'Portfolio',
    },
    {
        name: 'Contact',
    },
    {
        name: 'Resume'
    }
])
    
}

export default Nav;