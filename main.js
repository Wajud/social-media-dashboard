const scrollerContainer = document.querySelector(".color-selector-container");
const scroller = document.querySelector(".color-selector");
const preHeader = document.querySelector(".pre-header");
const headerTags = document.querySelectorAll("h1");
const paragraphs = document.querySelectorAll("p")
const cards = document.querySelectorAll(".card")
const colorMode = document.getElementById("light-mode")



scrollerContainer.addEventListener("click",(e)=>{
    console.log("Target: ", e.target)
    console.log("Current target: ", e.currentTarget)
    // if(!scroller.classList.contains("to-dark-mode"))
    if(!e.target.classList.contains("color-selector") && !scroller.classList.contains("to-dark-mode"))
    { 
        scroller.classList.add("to-dark-mode");
        scroller.classList.remove("to-light-mode");
        document.body.style.backgroundColor="hsl(230, 17%, 14%)";
        preHeader.style.backgroundColor="hsl(232, 19%, 15%)";
        headerTags.forEach(headerTag => {
            headerTag.style.color="#fff";
            
        });
        paragraphs.forEach(paragraph => {
            paragraph.style.color="hsl(228, 34%, 66%)";
            
        });
        cards.forEach(card=>{
            card.style.backgroundColor="hsl(228, 28%, 20%)";
        })
        colorMode.textContent="Light Mode";
    }



    // else
    else if (!e.target.classList.contains("color-selector") && scroller.classList.contains("to-dark-mode"))
    {
        scroller.classList.remove("to-dark-mode");
        scroller.classList.add("to-light-mode");
        document.body.style.backgroundColor="#fff";
        preHeader.style.backgroundColor="hsl(225, 100%, 98%)";
        headerTags.forEach(headerTag => {
            headerTag.style.color="black";
            
        });
        paragraphs.forEach(paragraph => {
            paragraph.style.color="hsl(228, 12%, 44%)";
            
        });
        cards.forEach(card=>{
            card.style.backgroundColor="hsl(227, 47%, 96%)";
        })
        colorMode.textContent="Dark Mode";
    }
   
})

