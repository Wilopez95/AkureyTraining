const game = new Game();
var scores = [];

game.initialize();

function Game() {
    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const moles = document.querySelectorAll('.mole');
    const audiohit = document.getElementById("hit");
    const gameview = document.querySelector('.game__conteiner');
    const scoreview = document.querySelector('.score__table'); 
    const optionsview = document.querySelector('.options--conteiner'); 
    const minPeepTime = 200;
    const maxPeepTime = 1000;
    let lastHole;
    let timeUp = false;
    let score = 0;

    this.initialize = () => {
        moles.forEach(mole => mole.addEventListener('click', this.bonk));
    }

    this.randomTime = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    this.randomHole = holes => {
        const idx = Math.floor(Math.random() * holes.length);
        const hole = holes[idx];
        if (hole === lastHole) return this.randomHole(holes);
        lastHole = hole;
        return hole;
    }

    this.peep = () => {
        const time = this.randomTime(minPeepTime, maxPeepTime);
        const hole = this.randomHole(holes);
        hole.classList.add('up');
        setTimeout(() => {
            hole.classList.remove('up');
            if (!timeUp) {
                this.peep();
            }else {
                console.log('finish');
                addScore(score);
            }
        }, time);
        
    }

    this.startGame = () => {
        scoreBoard.textContent = 0;
        timeUp = false;
        score = 0;
        this.setView();
        setTimeout(() => { this.peep(); }, 1500);
        setTimeout(() => timeUp = true, 10000)
    }

    this.bonk = e => {
        if (!e.isTrusted) return;
        score++;
        this.levelup();
        e.target.classList.remove('up');
        scoreBoard.textContent = score;
        audiohit.play();
    }

    this.levelup = () => {
        if(score>=5){
            const time = this.randomTime(minPeepTime/2, maxPeepTime/2);
        }
    }

    this.setView = ()=> {
        gameview.classList.remove('hide');
        scoreview.classList.add('hide');
        optionsview.classList.add('hide')
    }
}

function miss(){
    var audiomiss = document.getElementById("miss");
    audiomiss.play();
}

function LoadHistory() {
    var contenido = document.querySelector('#hScores')
    this.scores =  sortJson(JSON.parse(localStorage.getItem("scores")),'score');
      for(let valor of this.scores){
          contenido.innerHTML += ` <tr  >
                                        <td>${valor.username}</td>
                                        <td>${valor.score}</td>
                                    </tr>`
      }
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function addScore(score) {
    var name = document.getElementsByName("username")[0].value;
    this.scores = sortJson(JSON.parse(localStorage.getItem("scores")),'score');
    if(name == ""){
        name = "Anonimous"
    }  
    var newscore =     {
        "username": name,
        "score": score
      }
    if(this.scores.length < 5 ){
        this.scores.push(newscore);
        localStorage.setItem("scores", JSON.stringify(this.scores));
    }else{
        var minScore = this.scores[this.scores.length-1];
        if(newscore.score > minScore.score ){
            this.scores[this.scores.length-1] = newscore;
        }
        localStorage.setItem("scores", JSON.stringify(this.scores));
    }
    setTitleOver(score);
    setTimeout(() => { location.reload(); }, 4000);
}

function setTitleOver(score){
    var title = document.querySelector('#tittle')
        title.innerHTML = `<h1 id="tittle" class="tittle">Game Over, Your score: ${score}</h1>`
}

function sortJson(data,key){
    return data.sort(function(a ,b) {
      var x = a[key],
          y = b[key]
          return ((x > y) ? -1 : ((x < y) ? 1 : 0));  
    })
  }




