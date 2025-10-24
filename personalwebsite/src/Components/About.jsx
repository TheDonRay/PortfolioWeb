import React from "react";
import "../Styles/About.css"; 
import { useState } from 'react'; 

//TODO: Create CSS files for the pages here and add to them of what you want to add and like a cool little about yourself etc.

export default function AboutMe() {  

  const initialState = ''; 
  const newTextAboutMe =  `
          Hey there! I'm Rayat. I like to think of myself as a bootleg Tony Stark — minus
          the billion-dollar lab and fancy AI (for now 😅). I\’m a
          Computer Science student with a Math minor who loves Software Engineering, more specifically backend software
          engineering. I enjoy designing the logic, structure, and systems that
          keep apps running smoothly — even when the server decides to be
          dramatic. `; 

  // initialize state here as such for the about me 
  const [originalText, newText] = useState(''); 
  // Create 
  // create another funciton for this cool feature here as such 
  function changeForClient() { 
    newText(newTextAboutMe); 
  } 

  function Close() { 
    newText(initialState)
  } 

  //TODO: center Div to be on the left more of a css thing that i need to do. 
  return (
    <>
      <div className="about-me-card">
        <h1 className="Heading-Color">Rayat Chowdhury 🤵🏻‍♂️</h1>
        <p className="paragraph-Color">
          {originalText} 
          <button className ="button1" onClick={changeForClient}>Who is Rayat?😄</button> 
          <button className ="button2" onClick={Close}>Close</button>
        </p>
      </div> 

      {/*TODO: Create another card div to represent my hobbies and interests*/} 
      <div className="hobbydiv"> 
        <h1 className="hobby-heading">My Hobbies 🧑‍💻!</h1> 
        <p className="paragraphstyling"> 
          When I'm not studying for my classes, some of my Hobbies are..
        </p>
      </div> 

      {/*To do Creating another div here as such*/} 
      <div className="GoalsCard"> 
        <h1 className="goal-heading">My Goals 📈! </h1> 
        <p className="paragraphtextforGoals"> 
          My goal is simple — to become a Software Engineer who creates meaningful impact through technology. 
          I’m driven by the idea that software can transform lives, whether in healthcare, finance, or everyday life. 
          For me, it’s not just about writing code — it’s about building solutions that make a difference, whether it be for medical, 
          research, finance, or even solving a personal problem I'm dealing with. 
        </p>
      </div>
    </>
  );
}

