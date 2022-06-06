import React, {useState, useEffect } from  "react";

// This will create an array of the characters. Whenever the Array is clicked on, it'll store of the index value is true or false.

const CharacterImage = () => {
    const [charArray, setCharArray] =  useState([]);
    const [charClicked, setCharClick] = useState(false);

    
    useEffect(() =>{
        const charClick = () => {
            setCharClick(true);
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
             <img src="vulkan.jpg" alt="Nothing" width="50px" height="50px"> </img>
      </div>
    </div>
    )
}

export default CharacterImage;