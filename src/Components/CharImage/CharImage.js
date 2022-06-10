/* This program tests a player/user's memory by clicking an image. 
The image order changes and the score is adjusted each time the player
clicks an image they haven't clicked yet.
*/

import React, {useState, useEffect } from  "react";

// This will create an array of the characters. Whenever the Array is clicked on, it'll store of the index value is true or false


const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--){
        const j = Math.floor.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const CharacterImage = () => {
    //array of images
    const [charArray, setCharArray] =  useState(["vulkan.jpg"]);
    // Checks to see if clicked
    const [charClicked, setCharClick] = useState([]);
    // Holds the score
    const [score, setScore] = useState(0);
    // Holds the high score
    const [highScore, setHighScore] = useState(0);

    
    useEffect(() =>{
        //Checks to see if image is clicked.
        const charClick = (character) => {
            if(charClicked.includes(character)){
                //if it is clicked, reset score.
                setScore(0);
                //clears the array which hold checked image.
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
            //shuffles the images every click.
            setCharArray(shuffle(charArray));
        }

        setCharArray(shuffle(charArray));

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
            <div className="charContainer">
                {
                    charArray.map((image)=> (
                        <div className="char" onClick={()=> charClick(image)}>
                            <img alt={`primarch-${image}`} src={`${image}.jpg`} />
                    </div>
                    ))
                    }
                    </div>
      </div>
    </div>
    )
}

export default CharacterImage;