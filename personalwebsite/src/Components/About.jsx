import React from "react";
import "../Styles/About.css"; 
import { useState } from 'react'; 

//TODO: Create CSS files for the pages here and add to them of what you want to add and like a cool little about yourself etc.

export default function AboutMe() {  

  // this is for the 
  const initialState = ''; 
  const newTextAboutMe =  `
          Hey there! I'm Rayat. I like to think of myself as a bootleg Tony Stark — minus
          the billion-dollar lab and fancy AI (for now 😅). I\’m a
          Computer Science student with a Math minor who loves Software Engineering, more specifically backend software
          engineering. I enjoy designing the logic, structure, and systems that
          keep apps running smoothly — even when the server decides to be
          dramatic. `;  
  
  const hobbyinitialState = ''; 
  const newHobbyState = `When I’m not studying, you’ll usually find me diving deeper into Node.js, 
  exploring Express.js and building REST APIs just for fun! Outside of tech, I’m a huge car enthusiast—especially 
  when it comes to BMWs (the 550i, 540i, and 535i are my absolute favorites). And when it’s time to unwind, I love hitting 
  the court for some basketball or playing a relaxing round of golf.`; 

  const goalInitialState = ''; 
  const newGoalState = `My goals are really quite simple. I really want to be a software engineer. 
  Now it may sound plain but I want to build / contribute to tech in a way that it changes peoples lives. Now I dont 
  mean changing their lives financially but rather for medicine. Building software that can save someones life is something Im passionate about. Even if its not saving a life 
  if it can bring ease to your life I'm all up to build it. In addition I also want to make my parents proud. They always believed in me even when I thought they were just trying 
  to make my life so strict but as I'm getting older I see they really just want to make sure I'm on the right path. And for that I can never repay them fully but rather show them the success
  their son can have. 
  `; 

  // initialize state here as such for the about me 
  const [originalText, newText] = useState(''); 
  // Create another useState here for the button for the Hobbies Card here as such 
  const [orightext, newHtext] = useState('');   

  //create another one for the useState here for the goals card 
  const [origGoaltext, newGoalText] = useState(''); 

  // create another funciton for this cool feature here as such 
  function changeForClient() { 
    newText(newTextAboutMe); 
  } 

  function Close() { 
    newText(initialState)
  }  

  // this function is for the hobby button here as such 
  function hobbyButton() { 
    newHtext(newHobbyState); 
  }  

  // create a funciton for the close button here as such 
  function closeHobbyButton() { 
    newHtext(hobbyinitialState); 
  } 

  // create function for the goals card 
  function goalsCard() { 
    newGoalText(newGoalState); 
  } 

  function closeGoalCard() { 
    newGoalText(goalInitialState);
  }

  //TODO: center Div to be on the left more of a css thing that i need to do. 
  return (
    <>
      <div className="about-me-card">
        <h1 className="Heading-Color">About me! 🤵🏻‍♂️</h1>
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
          {orightext}  
          <button onClick ={hobbyButton} className="hobbybtn">Hobbies 🤖</button> {/*This is for the view my Hobbies button*/} 
          <button onClick = {closeHobbyButton} className="hobbyclose-btn">Close</button> {/*This is for the close button here as such*/}
        </p>
      </div> 

      {/*To do Creating another div here as such*/} 
      <div className="GoalsCard"> 
        <h1 className="goal-heading">My Goals 📈! </h1> 
        <p className="paragraphtextforGoals">  
          {origGoaltext} 
          <button onClick = {goalsCard} className="goalsbtn">Goals 💫</button> {/*This is for the view my Hobbies button*/} 
          <button onClick = {closeGoalCard} className="goalsclose-btn">Close</button>
        </p>
      </div>
    </>
  );
}

