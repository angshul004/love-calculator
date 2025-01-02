window.onload = function(){
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculatelove);
}

function calculatelove(){
    let yourname = document.getElementById("your-name").value.trim();
    let crushname = document.getElementById("crush-name").value.trim();    

    if (yourname !== "" && crushname !== "") {
        document.getElementById("result-message").innerText = "";
        document.getElementById("result-percentage").innerText = "";
        const celebrationContainer = document.getElementById("celebration");
        celebrationContainer.innerHTML = ""; // Clear previous celebrations

        // loading animation and messages
        const loadingElement = document.getElementById("loading");
        const loadingText = document.querySelector("#loading p");
        loadingElement.style.display = "block";
        document.getElementById("result-percentage").style.display = "none";

        const messages = [
            "Analyzing trusts...",
            "Calculating future...",
            "Matching compatibility..."
        ];

        let currentMessageIndex = 0;

        const interval = setInterval(() => {
            if (currentMessageIndex < messages.length) {
                loadingText.innerText = messages[currentMessageIndex];
                currentMessageIndex++;
            } else {
                clearInterval(interval); 

                let percentage = Math.floor(Math.random() * 101);

                loadingElement.style.display = "none";
                document.getElementById("result-message").innerText = yourname + " and " + crushname + "'s chance of love is:";

                document.getElementById("result-percentage").style.display = "block";

                if((yourname == "Adrija" && crushname == "Angshul")||(yourname == "Tathagata" && crushname == "Rikshika")||(yourname == "tathagata" && crushname == "rikshika")||(yourname == "Pushan" && crushname == "Debapriya")||(yourname == "pushan" && crushname == "debapriya")||(yourname == "Rikshika" && crushname == "Tathagata")){
                    document.getElementById("result-percentage").innerText = "100%";
                }
                else{
                    document.getElementById("result-percentage").innerText = percentage.toString() + "%";
                }

                for (let i = 0; i < 25; i++) {
                    const emoji = document.createElement("span");
                    emoji.innerText = "🎉";
                    emoji.className = "celebration-emoji";
                    celebrationContainer.appendChild(emoji);

                    // Animate the emojis
                    emoji.style.left = Math.random() * 100 + "vw";
                    emoji.style.top = Math.random() * 50 + "vh";
                    emoji.style.animationDelay = Math.random() * 2 + "s";
                }
            }
        }, 1000);
    } else{
        alert("Insert both person's name!");
    }
}
