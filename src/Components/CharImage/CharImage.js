import React, {useState, useEffect } from  "react";
import Score from "../Score/Score";

// This will create an array of the characters. Whenever the Array is clicked on, it'll store of the index value is true or false.

const CharacterImage = () => {
    //array of images
    const [charArray, setCharArray] =  useState(["vulkan.jpg"]);
    // Checks to see if clicked
    const [charClicked, setCharClick] = useState([]);
    // Holds the score
    const [score, setScore] = useState(0);
    // Holds the high score
    const [highScore, setHighScore] = useState(0);

    //
    useEffect(() =>{
        //Checks to see if image is clicked.
        const charClick = (character) => {
            if(charClicked.includes(character)){
                setScore(0);
                setCharClick([]);
            }

            else {
                //shallow merge charClickedArray
                setCharClick([...charClick, character])
                setScore(score + 1);
                if(score > highScore){
                    setHighScore(score);
                }
            }
        }

    })
    return(
        <div>
       <div
        id = "character"
        style={{
            color: "black",
            width: "100px",
            height: "100px",
            position: "absolute",
            left: "50%",
            top: "50%",
        }}
        >
             {charArray.map(image=> (
                 <img src={`images/${image}`} onClick={charClick(image)} />
             ))}
      </div>
    </div>
    )
}

export default CharacterImage;