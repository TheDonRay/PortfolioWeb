import React, { useState } from "react";
import { User, Github, Mail, Linkedin, Instagram, GitBranch} from 'lucide-react'; 
import { useNavigate } from 'react-router-dom'; 
import "../Styles/Home.css";

//TODO: change text to a more cooler font and put some coloring on it. 
//REMINDER: Added the Gitbranch create a page which holds the projects I did in a grid layout. 
function HomePage() { 
    const navigatetoAbout = useNavigate(); 
    const navigatetoEmail = useNavigate(); 

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const navItems = [
        { icon: User, label: 'About Me', w: '/about'},
        { icon: Linkedin, label: 'Linkedin', href:'https://www.linkedin.com/in/rayatchowdhury2005', external: true },
        { icon: Mail, label: 'Email' },
        { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/rayyatttz', external: true },
        { icon: Github, label: 'Github', href: 'https://github.com/TheDonRay', external: true}, 
        { icon: GitBranch, label: 'Projects'}
    ];

    return (
        <div className="homepage-container">
            <h1 className="h1css">Hey! My Name is Rayat Chowdhury. Welcome to My Portfolio!</h1>
            
            {/* Floating Navigation Bar */}
            <nav className="floating-navbar">
                <div className="nav-container">
                    {navItems.map((item, index) => {
                        const IconComponent = item.icon;
                        const isHovered = hoveredIndex === index;
                        
                        const handleClick = () => { 
                            if (item.external && item.href){ 
                                window.open(item.href, "_blank"); 
                            } else if (item.label === "About Me"){ 
                                navigatetoAbout('/about'); 
                            } else if (item.label === "Email"){ 
                                navigatetoEmail('/email'); 
                            }
                        }
                        return (
                            <div
                                key={index}
                                className="nav-item"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Tooltip */}
                                <div className={`tooltip ${isHovered ? 'tooltip-visible' : ''}`}>
                                    {item.label}
                                    <div className="tooltip-arrow"></div>
                                </div>

                                {/* Icon Button */}
                                <button className={`icon-button ${isHovered ? 'icon-button-hovered' : ''}`} 
                                    onClick={() => {handleClick(item)}}
                                >
                                    {/* Glow effect */}
                                    <div className={`glow-effect ${isHovered ? 'glow-visible' : ''}`}></div>
                                    
                                    <IconComponent
                                        size={24}
                                        className={`icon ${isHovered ? 'icon-hovered' : ''}`}
                                    />
                                </button>
                            </div>
                        );
                    })}
                </div>
                
                {/* TODO: Need to add more orbs so that its all over the place on the page */}
                {/* Floating orbs around navbar */}
                <div className="floating-orb floating-orb-1"></div>
                <div className="floating-orb floating-orb-2"></div>
                <div className="floating-orb floating-orb-3"></div>
            </nav>
        </div>
    );
}

export default HomePage;