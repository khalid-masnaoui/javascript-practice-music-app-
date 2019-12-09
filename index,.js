window.addEventListener("load", function() {
        const sounds = document.querySelectorAll("audio");
        const pads = document.querySelectorAll(".pad");
        const colors = ["green", "yellow", "blue", "red", "purple", "grey"];
        const visual = document.querySelector(".visuals");
        pads.forEach((pad, index) => {
            pad.addEventListener("click", function() {
                /* !!!! importnat*/
                sounds[index].currentTime = 0;
                sounds[index].play();
                creatBublles(index);

            });
        });
        //function that makes bublles
        const creatBublles = (index) => {
            const bublle = document.createElement("div");
            visual.appendChild(bublle);
            bublle.style.backgroundColor = colors[index];
            bublle.style.animation = "jump 1s ease";

            /*const f = () => {
                visual.style.marginBottom = "120px"
            };
            setTimeout(f, 300);
            clearTimeout(setTimeout(f, 300));*/
            bublle.addEventListener("animationend", function() {
                visual.removeChild(this);
            })
        }


    }











)