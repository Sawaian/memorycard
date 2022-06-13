/* This program tests a player/user's memory by clicking an image. 
The image order changes and the score is adjusted each time the player
clicks an image they haven't clicked yet.
*/

import React, { useEffect, useState } from "react";

import "./styles.css";

// This will create an array of the characters. Whenever the Array is clicked on, it'll store of the index value is true or false

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const CharacterImage = () => {
  //array of images
  const [charArray, setCharArray] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  // Checks to see if clicked
  const [charClicked, setCharClick] = useState([]);
  // Holds the score
  const [score, setScore] = useState(0);
  // Holds the high score
  const [highScore, setHighScore] = useState(0);

  function isScoreHigher() {
    if (score > highScore) {
      setHighScore(score + 1);
    }
  }

  //Checks to see if image is clicked.
  const charClick = (character) => {
    if (charClicked.includes(character)) {
      setScore(0);
      setCharClick([]);
      score > highScore && setHighScore(score);
    } else {
      setCharClick([...charClicked, character]);
      setScore(score + 1);
    }
  };

  useEffect(() =>
    //sets the order of the array.
    setCharArray(shuffle(charArray), [])
  );

  return (
    <div>
      <div id="character">
        <h1>
          Score: {score} ({highScore})
        </h1>
        <div className="charContainer">
          {charArray.map((image) => (
            <div className="char" onClick={() => charClick(image)}>
              <img alt={`primarch-${image}`} src={`${image}.jpg`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterImage;
