import React, {useState, useEffect } from  "react";

const Score = () => {
    const [score, setScore] = useState(0);

    useEffect(() =>{
        const tabulate = () => {
            setScore(score + 1)
            return;
        }

    
    document.addEventListener("click", tabulate);
    }
    )

    return(
        <div>
       <div
        id = "score"
        style={{
            color: "black",
            width: "100px",
            height: "100px",
            position: "absolute",
            left: "50%",
            top: "50%",
        }}
        >
            <button> Click for high score</button>
              Your score is {score}
      </div>
    </div>
    )
}

export default Score;