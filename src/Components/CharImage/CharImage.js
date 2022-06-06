import React, {useState, useEffect } from  "react";

// This will create an array of the characters. Whenever the Array is clicked on, it'll store of the index value is true or false.

const CharacterImage = () => {
    const [charArray, setCharArray] =  useState(["vulkan.jpg"]);
    const [charClicked, setCharClick] = useState(false);

    
    useEffect(() =>{
        const charClick = () => {
            setCharClick(true);
            console.log("charClicked");
            return;
        }

        document.addEventListener("click", charClick);

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
                 <img src={`images/${image}`} onClick={charClick} />
             ))}
      </div>
    </div>
    )
}

export default CharacterImage;