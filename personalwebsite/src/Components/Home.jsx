import React, { useState } from "react";
import { User, Github, Mail, Linkedin, Instagram } from 'lucide-react';
import "../Styles/Home.css";

function HomePage() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const navItems = [
        { icon: User, label: 'About Me' },
        { icon: Linkedin, label: 'Linkedin', href:'https://www.linkedin.com/in/rayatchowdhury2005', external: true },
        { icon: Mail, label: 'Email' },
        { icon: Instagram, label: 'Instagram', href: '' },
        { icon: Github, label: 'Github', href: 'https://github.com/TheDonRay', external: true}
    ];

    return (
        <div className="homepage-container">
            <h1 className="h1css">Hey! I'm Rayat Chowdhury</h1>
            
            {/* Floating Navigation Bar */}
            <nav className="floating-navbar">
                <div className="nav-container">
                    {navItems.map((item, index) => {
                        const IconComponent = item.icon;
                        const isHovered = hoveredIndex === index;
                        
                        const handleClick = () => { 
                            if (item.external && item.href){ 
                                window.open(item.href, "_blank"); 
                            } else if (item.label === "Email"){ 
                                window.location.href = "mailto:rayatchowdhury2005@gmail.com"; 
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
                                    onClick={handleClick} 
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

                {/* Floating orbs around navbar */}
                <div className="floating-orb floating-orb-1"></div>
                <div className="floating-orb floating-orb-2"></div>
                <div className="floating-orb floating-orb-3"></div>
            </nav>
        </div>
    );
}

export default HomePage;