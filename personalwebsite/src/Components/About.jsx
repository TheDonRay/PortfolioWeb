import React, { useState } from "react";
import "../Styles/About.css";

export default function AboutMe() {  

  // About Me text
  const initialState = ''; 
  const newTextAboutMe = `
    Hey there! I'm Rayat. I like to think of myself as a bootleg Tony Stark — minus
    the billion-dollar lab and fancy AI (for now 😅). I'm a
    Computer Science student with a Math minor who loves Software Engineering, more specifically backend software
    engineering. I enjoy designing the logic, structure, and systems that
    keep apps running smoothly — even when the server decides to be
    dramatic.
  `;  

  // Hobbies array
  const hobbiesArray = [
    "Diving deeper into Node.js, exploring Express.js, and building REST APIs just for fun",
    "Huge car enthusiast, especially BMWs (favorites: 550i, 540i, 535i)",
    "Enjoy basketball or a relaxing round of golf to unwind"
  ];

  // Goals text
  const goalInitialState = ''; 
  const newGoalState = `
   My goals are clear and focused: I aspire to be a software engineer who creates meaningful impact through technology. I am passionate about building solutions that improve lives—whether by contributing to advancements 
   in healthcare or developing tools that simplify everyday challenges. Beyond the technical achievements, I am driven to honor the trust and support my parents have always shown me, striving to make them proud through 
   the success and positive influence I bring to the worlde right path. And for that I can never repay them fully but rather show them the success their son can have.
  `; 

  // States
  const [originalText, newText] = useState(''); 
  const [hobbies, setHobbies] = useState([]);   
  const [origGoaltext, newGoalText] = useState(''); 

  // Functions for About Me
  function changeForClient() { newText(newTextAboutMe); } 
  function Close() { newText(initialState); }  

  // Functions for Hobbies
  function hobbyButton() { setHobbies(hobbiesArray); }  
  function closeHobbyButton() { setHobbies([]); } 

  // Functions for Goals
  function goalsCard() { newGoalText(newGoalState); }
  function closeGoalCard() { newGoalText(goalInitialState); }

  return (  
      <div className="cards-container">

        {/* About Me Card */}
        <div className="about-me-card">
          <h1 className="Heading-Color">About me! 🤵🏻‍♂️</h1>
          <p className="paragraph-Color">
            {originalText} 
            <button className="button1" onClick={changeForClient}>Who is Rayat?😄</button> 
            <button className="button2" onClick={Close}>Close</button>
          </p>
        </div> 

        {/* Hobbies Card */}
        <div className="hobbydiv"> 
          <h1 className="hobby-heading">My Hobbies 🧑‍💻!</h1> 
          {hobbies.length > 0 && (
            <ul className="paragraphstyling">
              {hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          )}
          <button onClick={hobbyButton} className="hobbybtn">Hobbies 🤖</button>
          <button onClick={closeHobbyButton} className="hobbyclose-btn">Close</button>
        </div> 

        {/* Goals Card */}
        <div className="GoalsCard"> 
          <h1 className="goal-heading">My Goals 📈! </h1> 
          <p className="paragraphtextforGoals">  
            {origGoaltext} 
            <button onClick={goalsCard} className="goalsbtn">Goals 💫</button>
            <button onClick={closeGoalCard} className="goalsclose-btn">Close</button>
          </p>
        </div>  

        <button></button>
      </div>  
  );
}
