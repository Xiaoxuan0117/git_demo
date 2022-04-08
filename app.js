const game = ()=>{
    let pScore=0;
    let cScore=0;

    const startGame = ()=>{
        const playBtn = document.querySelector(".intro button");
        const intro = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", ()=>{
            intro.classList.add("fadeOut");
            match.classList.remove("fadeOut");
            match.classList.add("fadeIn");
        }); 
    };

    const playmatch = ()=>{
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computorHand = document.querySelector(".computor-hand");
    const hands = document.querySelectorAll(".hands img");
    
    hands.forEach(hand=>{
        hand.addEventListener("animationend", function(){
            this.style.animation = "";
        });
    });//每次開始前更新成動畫是空的狀態，後面的style.animation才會作用

    const computorOptions = ["rock", "paper", "scissors"]
    
    options.forEach(option=>{
        option.addEventListener("click", function(){
            playerHand.src = 'rock.png';
            computorHand.src = 'rock.png';
            const computorNumner = Math.floor(Math.random()*3);
            const computorChoice = computorOptions[computorNumner];

            setTimeout(()=>{
                compareHeads(this.textContent, computorChoice);

                playerHand.src = `${this.textContent}.png`;
                computorHand.src = `${computorChoice}.png`;

            }, 2000);//2000是延遲出現的時間

            playerHand.style.animation = "shakePlayer 2s ease";
            computorHand.style.animation = "shakeComputor 2s ease";
        });
    });
};


    const compareHeads = (playerChoice, computorChoice)=>{
        const winner = document.querySelector(".winner");
        const playerScore = document.querySelector(".player-score p")
        const computorScore = document.querySelector(".computor-score p")
        
        console.log(playerScore.textContent);
        console.log(cScore);

        if (playerChoice===computorChoice){
            winner.textContent="It is a tie";
            return;
        }

        if(playerChoice==="rock"){
            if(computorChoice==="scissors"){
                winner.textContent="Player wins!";
                pScore=pScore+1;
                playerScore.textContent = String(pScore);
                return;
            }else{
                winner.textContent="Computor wins!";
                cScore=cScore+1;
                computorScore.textContent = String(cScore);
                return;
            }
        }

        if(playerChoice==="paper"){
            if(computorChoice==="rock"){
                winner.textContent="Player wins!";
                pScore=pScore+1;
                playerScore.textContent = String(pScore);
                return;
            }else{
                winner.textContent="Computor wins!";
                cScore=cScore+1;
                computorScore.textContent = String(cScore);
                return;
            }
        }

        if(playerChoice==="scissors"){
            if(computorChoice==="paper"){
                winner.textContent="Player wins!";
                pScore=pScore+1;
                playerScore.textContent = String(pScore);
                return;
            }else{
                winner.textContent="Computor wins!";
                cScore=cScore+1;
                computorScore.textContent = String(cScore);
                return;
            }
        }
    };

    startGame();
    playmatch();
}

game();